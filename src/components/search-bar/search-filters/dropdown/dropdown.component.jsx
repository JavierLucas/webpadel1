import React from 'react';
import './dropdown.styles.css';
import {LevelItem, DateItem, HourItem} from './dropdown-item/dropdown-item.component';

class DropDown extends React.Component
{
    constructor() {
        super();
        this.state = {
            dateText: ''
        };
    }

    getValues = (option) =>{
            try {
                var named = option.name;
                var style = option.style;
                return [named, style]
            } catch {
                    named = option;
                    console.log(named);
                    style = {backgroundColor: 'rgb(255, 255, 255)'};
                    return [named, style];
            }
        };
    
    handleChange = (e) => {
        this.setState({dateText: this.insertSlash(e.target.value)});
    };

    insertSlash(val) {
        return val.replace(/^(\d{2})(\d{2})/, '$1/$2/');
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
         this.props.handler(this.props.filter.name, this.state.dateText);
      } else {
         return false;
      }
    };
    
    render() {
        return (
            <div className="dd-list">
            {this.props.filter.name !== 'Día' ?
                (
                    this.props.filter.options.map(option => (
                        <div key={option.name} className="dd-list-item">
                            <div className='item-clicker' onClick= {() => this.props.handler(this.props.filter.name, option.name)}>
                                {this.props.filter.name === 'Hora' ? <HourItem values={this.getValues(option)} /> 
                                : <LevelItem values={this.getValues(option)} /> }
                            </div>
                        </div>
                    ))
            ) : (
                <div className='date-container'>
                    <h5>Día:</h5>
                    <input type='text' placeholder='dd/mm/yy' value={this.state.dateText} onChange={this.handleChange} onKeyPress={this.handleEnter}></input>
                    <div className="date-list">
                    {
                        this.props.filter.options.map(option => (
                            <div key={option.name} className='date-item' onClick= {() => this.props.handler(this.props.filter.name, option.name)}>
                                <DateItem values={this.getValues(option)} />
                            </div>
                    ))
                    }
                    </div>
                </div>
            )}
            </div>
        );
    }
}

export default DropDown;