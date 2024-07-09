import React from 'react';

const UserInfo = (props) => {
  const { name, email, age } = props.user;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserInfo;
