import React from 'react'

export default function UserData(props) {
    const {
        userData
    } = props

  return (
    <div>
      {userData.map(user => ( 
       <div key={user}>{user}</div> 
      ))}
    </div>
  )
}
