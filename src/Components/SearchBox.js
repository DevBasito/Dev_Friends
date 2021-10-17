import React from 'react';

const SearchBox = ({searchchange}) => {
    return(
        <div>
            <input type="text" name="" id="" placeholder="Search Developers" onChange={searchchange}
             className='pa3 ba b--green bg-lightest-blue ma3'/>
        </div>
    )
}
export default SearchBox; 