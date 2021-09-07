import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/footer.component';
import { data } from './components/footer/footerData/footerData';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ClassPage from './pages/classInfo/classpage.component';

const footerData = data;

class App extends Component{

  render() {
    //const {monsters, searchField} = this.state;
    //const filteredMons = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <div className='page-organizer'>
          <div className='main'>
            <Switch>
              <Route exact path='/' component={Homepage}></Route>
              <Route exact path='/classInfo' component={ClassPage}></Route>
              {
                footerData.map(items => items.links.map(item =>
                  <Route exact path={item.link} component={item.component}></Route>
                  ))
              }
            </Switch>
          </div>
        <Footer text='WebPadel 2021' data={footerData}/>
        </div>
      </div>
    );
  }
}

export default App;
