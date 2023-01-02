import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
          <input placeholder='Find a user' type='text' />
        </div>
        <div className='userChat'>
            <img  src='https://images.pexels.com/photos/14845056/pexels-photo-14845056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
            <div className='userChatInfo'>
                <span>Manish</span>
            </div>
        </div>
    </div>
  )
}

export default Search
