import React, { useEffect, useState} from 'react';
import UserCard from './user-card';
import {getUsers}  from '../services/user-list-service'

function UserList(){
  const [users, setList] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
        setList(res.data.data)
        console.log(res,'asas')
      })
  }, []);

  return(
    <div className="card-container">
      {users.map(item => (
        <UserCard key={item.id} {...item}/>
      ))
      }
    </div>
  )
};

export default UserList;