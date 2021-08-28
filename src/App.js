import './App.css';

import React from 'react';
import {Route, Switch} from 'react-router-dom'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import SignIn from './pages/signin/signin.component';
import SignUp from './pages/signup/signup.component';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null

    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)

          });
        });
      }
      else{
        this.setState({
          currentUser: null
        });
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
