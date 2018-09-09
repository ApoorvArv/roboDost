import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa2'>
        <input type='search'
                placeholder='Search For Your RoboDost'
                 className='pa3 ba b--blue bg-lightest-blue'
                onChange= {searchChange} />
        </div>
    );
}

export default SearchBox;