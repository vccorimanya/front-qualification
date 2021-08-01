import React from 'react';


function UserCard({ children, avatar, first_name, username, email}) {
  return(

      <div className="card">
        <img className="avatar" src={avatar} alt="" />
        <h4>{username}</h4>
      <h5 className="name">{first_name}</h5>
      <h6>{email}</h6>

        {children}
      </div>
  )
};

export default UserCard;