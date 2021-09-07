import React from 'react';
import './homepage.styles.css';
import SearchBar from '../../components/search-bar/search-bar.component';
import { CardList } from '../../components/class/card-list/card-list.component';

class Homepage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchField: '',
            value: '',
            clicked: false,
            Nivel: ['Nivel' ,false],
            Hora: ['Hora', false],
            Día: ['Día', false],
            Género: ['Género', false],
            monsters: []
        };

        this.submitInfo = {};
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}))
    }

    handleSubmit = (e) => {
      this.submitInfo = {
        searchField:this.state.searchField,
        level: this.state.Nivel[0],
        hour: this.state.Hora[0],
        day: this.state.Día[0],
        gender: this.state.Género[0]
      }
      console.log(this.submitInfo);
    };

    handleUpdater = (id, value) => {
      id === 'searchField' ? this.setState({[id] : value}) :
      this.setState({[id] : [value, false]})
    }

    render() {
        return (
            <div className='homepage'>
                <div className='homepage-pres'>
                    <h1>Web Padel</h1>
                    <div className='search-container'>
                        <SearchBar filters={this.state} handle={this.handleSubmit} updater={this.handleUpdater}/>
                    </div>
                </div>
                <div className='class-container'>
                    {
                        (this.state.monsters).map(monster => (
                            <div key={monster.id}>
                                <h2 className='class-title'>{monster.name}</h2>
                                <CardList monsters={this.state.monsters} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
}}

export default Homepage;