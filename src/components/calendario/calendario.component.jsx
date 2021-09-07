import React from 'react';
import './calendario.styles.scss';
import WeekNames from './week/week.component';
import Hours from './schedule/schedule.component';
import moment from 'moment';

const days = 7;

class Calendario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            min: [<div key={0} className='day-hour-blank-part'></div>],
            dateObject: moment(),
            hoy:moment().get('date')
        }

        this.weekDays =
                [['Lun.',-1, ''],
                    ['Mar.',-1, ''],
                    ['Mie.',-1, ''],
                    ['Jue.',-1, ''],
                    ['Vie.',-1, ''],
                    ['Sab.',-1, ''],
                    ['Dom.',-1, '']]
    }

    getDate = (start, month) => {
        let fecha = start.concat('-');

        if (month < 10) {
            fecha = fecha.concat('0'.concat(month));
        } else {
            fecha = fecha.concat(month);
        }
        return fecha;
    }

    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let today = dateObject.get('date');

        let day = dateObject.weekday() === 0 ? 6 : dateObject.weekday() - 1;
        let last = dateObject.daysInMonth();

        let month = dateObject.month();

        let counter = 0;
        let counter2 = 1;
        let suma = 0;
        let last2 = moment(this.getDate(dateObject.format('Y'), (month - 1))).daysInMonth();

        for (let i = (day - 1); i >= 0; i--) {
            suma++;
            if (today - suma <= 0) {
                this.weekDays[i][1] = last2 - counter;
                this.weekDays[i][2] = month - 1
                counter++;
            } else {
                this.weekDays[i][1] = today - counter2;
                this.weekDays[i][2] = month
                counter2++;
            }
        }

        counter = 1;
        counter2 = 0
        for (let i = day; i < 7; i++) {
            if (today + counter2 > last) {
                this.weekDays[i][1] = counter;
                this.weekDays[i][2] = month + 1
                counter++;
            } else {
                this.weekDays[i][1] = today + counter2;
                this.weekDays[i][2] = month
                counter2++;
            }
        }
    };

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
        this.firstDayOfMonth()
        return (
            <div className='calendar-container'>
                <h2>{(this.state.dateObject)._locale._months[this.weekDays[this.state.dateObject.weekday() === 0 ? 6 : this.state.dateObject.weekday() - 1][2]]}</h2>
                <form onSubmit={this.bookMin}>
                    <input type='text'></input>
                    <input type='submit' value='reservar'></input>
                </form>
                <div className='calendar-days-container'>
                    <WeekNames days={days} week={this.weekDays} estado={this.state}/>
                </div>
                <Hours days={this.weekDays} minutes={this.state.min}/>
            </div>
        );
    }
}

export default Calendario;