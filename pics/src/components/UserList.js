import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Eyoel Fikadu" },
    { id: 2, name: "Ey Fikadu" },
    { id: 3, name: "Eyo Fikadu" },
    { id: 4, name: "Eyoe Fikadu" },
  ];

  const userL = users.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  return <ul>{userL}</ul>;
};

export default UserList;
