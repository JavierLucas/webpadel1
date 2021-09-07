import React from 'react';
import './search-filters.styles.css';
import DropDown from './dropdown/dropdown.component';
import onClickOutside from 'react-onclickoutside';

const filters = [
    {
        name: 'Nivel',
        id: 'abc',
        options: [
            {
                name:'Principiante',
                style: {backgroundColor: 'rgb(93, 252, 93)'}
            },
            {
                name: 'Intermedio',
                style:{backgroundColor: 'rgb(255, 162, 56)'}
            },
            {
                name:'Avanzado',
                style: {backgroundColor: 'rgb(255, 51, 51)'}
            }
        ]
    },
    {
        name: 'Género',
        id: 'xyz',
        options: [
            {
                name:'Masculino',
                style: {backgroundColor: 'lightblue'}
            },
            {
                name: 'Femenino',
                style:{backgroundColor: 'lightpink'}
            }
        ]
    },
    {
        name: 'Hora',
        id: 'def',
        options: [
            {name:'0:00'}, 
            {name:'1:00'},
            {name:'2:00'},
            {name:'3:00'},
            {name:'4:00'},
            {name:'5:00'},
            {name:'6:00'},
            {name:'7:00'},
            {name:'8:00'},
            {name:'9:00'},
            {name:'10:00'},
            {name:'11:00'},
            {name:'12:00'}    
        ]
    },
    {
        name: 'Día',
        id: 'ghi',
        options: [
            {name:'Hoy'},
            {name:'Mañana'}
            ]
    },
    
];

class SearchFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = (this.props.datos)
    }

    handleClickOutside() {
        var x = ''
        for (x in this.state) {
            this.setState({[x]:[this.state[x][0],false]})
        }
    }

    handleClick = (e) => {
        var check = (e.target.id);
        var x = ''
        for (x in this.state) {
            x !== check ? this.setState({[x]:[this.state[x][0],false]}) : x= 'hola';
        }
        if (check === 'Nivel' || check === 'Día' || check === 'Hora' || check === 'Género') {
            this.state[check][1] ? this.setState({[check]:[this.state[check][0],false]}) :this.setState({[check]:[this.state[check][0], true]})
        }
    };

    handler = (item,val) => {
        this.setState({[item]:[val, false]}, () => this.props.onSubmit(item, val));
    };

    eraser = (name) => {
        this.setState({[name]:[name, this.state[name][1]]}, () => this.handler(name, name));
    }

    render() {
        return (
            <div className='search-filters-container'>
                {
                    filters.map(filter => (
                        <div className="dd-wrapper" key={filter.name}>
                            <div className="dd-header" onClick={this.handleClick}>
                                <div className="dd-header-title" id={filter.name}>{this.state[filter.name][0]}</div>
                                {this.state[filter.name][0] !== filter.name ? <div className='filter-eraser' onClick={() => this.eraser(filter.name)}>&#10799;</div> : null}
                            </div>
                            {
                                this.state[filter.name][1] ? <DropDown key={filter.id} filter={filter} handler={this.handler} /> : null
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
} 

export default onClickOutside(SearchFilters);