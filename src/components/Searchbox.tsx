import React from "react";
import {ChangeEventHandler} from 'react';

type SearchboxProps = {
    searchChange: ChangeEventHandler<HTMLInputElement>
}

const Searchbox = ({searchChange}: SearchboxProps) => {
    // console.log('Search')
    return (
        <div className="pa2">
            <input 
            type='search' 
            placeholder="search robots" 
            className="pa3 ba b--green bg-lightest-blue"
            onChange={searchChange}
            />
        </div>
    )
}

export default Searchbox;