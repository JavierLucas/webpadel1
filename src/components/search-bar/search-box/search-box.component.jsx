import React from 'react'
import './search-box.styles.css'
import SearchDropdown from './search-box-dropdown/searchdropdown.component';
import onClickOutside from 'react-onclickoutside';

const data = [
    {
        type: 'Ciudades',
        data:[
            {
                name: 'Alicante'
            },
            {
                name: 'Madrid'
            },
            {
                name: 'Sevilla'
            },
        ]
    },
    {
        type: 'Club',
        data:[
            {
                name: 'Club de campo'
            },
            {
                name: 'Club padel'
            },
            {
                name: 'Club de señores'
            },
        ] 
    }
];



class SearchBox extends React.Component
{
    constructor(props) {
        super(props);
        this.state = this.props.datos;
    }

    handleChanger = (e) => {
        this.setState({searchField: e.target.value });
        this.setState({value: e.target.value });
        if (this.state.value.length >= 1) {
            this.setState({clicked: true});
        } else {
            this.setState({clicked: false});
        }
    }

    handleClickOutside() {
        this.setState({value: ''});
        this.handler(this.state.searchField);
    }

    handler= (name) => {
        this.setState({searchField: name}, () => this.props.onSubmit('searchField' , this.state.searchField));
        this.setState({value: ''});
    }
    render() {
        const filteredLocations = data.map(tipo => ({'name':[tipo.type], 'data': tipo.data.filter(nombre => nombre.name.toLowerCase().includes(this.state.searchField.toLowerCase()))}));
        return (
            <div className='searchbox-container'>
                <input
                className='search'
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.handleChanger}
                value={this.state.searchField}

            />
            {
                (this.state.value).length >= 1  ? (
                    <SearchDropdown key='987' dat={filteredLocations} handler={this.handler}/>
                ) : null
            }
            </div>
        );
    }
}

export default onClickOutside(SearchBox);