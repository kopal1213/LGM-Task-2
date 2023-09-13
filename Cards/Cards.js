import React from 'react'
import './card.css'

export default function Cards({user}) {

  return (
    <div className='card'>
      {user.map((user) => (
            <div key={user.id} className="cards">
                <img src={user.avatar} alt="User" className='image' />
                <span className='name'>
                  Name : {user.first_name} {user.last_name}
                </span>
                <br />
                <br />
                <span className='mail'>E-mail : {user.email}</span>
            </div>
          ))}
    </div>
  )
}
