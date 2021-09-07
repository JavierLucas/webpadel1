import React from 'react';
import './search-bar.styles.css';
import SearchBox from './search-box/search-box.component';
import SearchFilters from './search-filters/search-filters.component';
import SearchButton from './search-button/search-button.component';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.filters
    }

    render() {
        return (
            <div className='search-bar-container' onBlur={this.handleClick2}>
                <SearchBox placeholder='Buscar club, ciudad' datos={this.state} onSubmit={this.props.updater}/>
                <SearchFilters datos={this.state} onSubmit={this.props.updater}/>
                <SearchButton type='button' onClick={this.props.handle}>Buscar</SearchButton>
            </div>
        );
  }
}


export default SearchBar;