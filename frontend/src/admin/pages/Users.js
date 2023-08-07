// import React from "react";

// const Users = () => {
//   return (
//     <>
  
//     </>
//   );
// };

// export default ;


import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TableAdmin from "../components/Table";
import { Link } from "react-router-dom";

const Users = () => {

  const columns = ['username', 'email', 'role','createdAt'];
  const data = [
    { 
    username: "basel",
    email: "b.m.qarqa@gmail.com",
    role: "user",
    createdAt: "15/7/2023",},
    { 
      username: "basel",
      email: "b.m.qarqa@gmail.com",
      role: "user",
      createdAt: "15/7/2023",},
      { 
        username: "basel",
        email: "b.m.qarqa@gmail.com",
        role: "user",
        createdAt: "15/7/2023",},
        { 
          username: "basel",
          email: "b.m.qarqa@gmail.com",
          role: "user",
          createdAt: "15/7/2023",},
          { 
            username: "basel",
            email: "b.m.qarqa@gmail.com",
            role: "user",
            createdAt: "15/7/2023",},
  ];

  const handleViewClick = (row) => {
    console.log('View:', row);
  };



  return (
    <>
      <input type="checkbox" name="" id="menu-toggle" />
      <div className="overlay">
        <label htmlFor="menu-toggle"></label>
      </div>

      <Sidebar />
      <div className="main-content">
        <Header title={"Users"} />

        <div className="admin-container-main">
          <div className="header-main">
          <h4 className="main-txt-header">All Users</h4>
    

            <Link to="/admin/add-users" className="btn-login">
            New User +
              </Link>

          </div>
        <TableAdmin columns={columns} data={data}  
         onViewClick={handleViewClick}
      />
        </div>
      </div>
    </>
  );
};

export default Users;
