import React from 'react';
import './schedule.styles.scss'
import onClickOutside from 'react-onclickoutside';

const horas = ['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']

const schedule = 
    [
        [],
        [true,true,true,true,true,true,true,true,true,false,false,true,false,true,false,true,true,false,false,false,false,true,true,true],
        [true,false,true,true,true,true,true,true,true,false,false,true,true,true,false,true,true,false,true,false,false,false,true,true],
        [true,true,true,true,true,true,true,true,true,false,false,true,false,true,false,true,true,false,false,false,false,true,true,true],
        [true,false,true,true,true,true,true,true,true,false,false,true,true,true,false,true,true,false,true,false,false,false,true,true],
        [true,true,true,true,true,true,true,true,true,false,false,true,false,true,false,true,true,false,false,false,false,true,true,true],
        [true,false,true,true,true,true,true,true,true,false,false,true,true,true,false,true,true,false,true,false,false,false,true,true],
        [true,false,true,true,true,true,true,true,true,false,false,true,true,true,false,true,true,false,true,false,false,false,true,true]
    ]


class DropdownCalendar extends React.Component {
    constructor() {
        super();
        this.state = {
            min: [<div key={0} className='day-hour-blank-part'></div>]
        }
    }

    bookMin = (e) => {
        e.preventDefault();
        const valor = Math.floor(60 / (e.target[0].value));
        const final = [];
        for (let o = 1; o < valor; o++) {
            final.push(<div key={o} className='day-hour-blank-part'></div>)
        }
        if ((this.state.min).length === 1) {
            this.setState({min: this.state.min.concat(final)});
        } else {
            this.setState({min: [<div key={0} className='day-hour-blank-part'></div>]}, () => this.setState({min: this.state.min.concat(final)}, () => console.log(this.state.min)));
        }
    }

    render() {
        return (
            <div className='drop-calendar'>
                <div className='drop-calendar-image'>
                    <div className='drop-calendar-image-circle'>
                    </div>
                </div>
                <div className='drop-calendar-text-container'>
                    <h2>Club de Campo</h2>
                    <h3>{this.props.options[(this.props.values).position]}</h3>
                    <h4>{this.props.values.hora}</h4>
                </div>
                <form onSubmit={this.bookMin}>
                    <input type='text'></input>
                    <input type='submit' value='reservar'></input>
                </form>
            </div>
        );
    }
}

class Hours extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            position: 0,
            hora: ''
        }
    }

    handleClickOutside() {
        this.setState({clicked: false})
    }
    render() {
        return (
            <div className='hours-container'>
                {
                    this.state.clicked ? <DropdownCalendar options={this.props.days} values={this.state} /> : null
                }
                {
                    horas.map((hora,i) => (
                        <div className='hour-container'>
                            {
                                schedule.slice(0,(this.props.days).length + 1).map((num, index) => index === 0 ? (
                                    <div className='day-hour-text'>{hora}</div>
                                ) : (
                                    <div className='day-hour-blank' title={hora} onClick={() => 
                                        {this.setState({clicked: true})
                                        this.setState({position:index - 1})
                                        this.setState({hora:hora})}}>
                                        {
                                            this.props.minutes.map(day => day)
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default onClickOutside(Hours);