import React from 'react'

export const Searchbar = () => {
  return (
    <div className='searchbar'>
        <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
        </button>
        <input placeholder='Search'></input>
    </div>
  )
}
