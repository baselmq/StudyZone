// // import React from "react";
// import "../style/addUsers.css";
// import React, { useState } from "react";
// import { InputText } from 'primereact/inputtext';

// // const FileUploadComponent = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     setSelectedFile(file);
// //   }};
// const AddUsers = () => {
//   const [image, setimage] = useState("");

//   return (
//     <div className="AddUser">
//       <div className="row AddUser_row">
//         <div className="col-75 AddUser_75">
//           <div className="container AddUser_container">
//             <form action="/">
//               <div className="User_form">
//                 <div className="row AddUser_row">
//                   <div className="profile_img">
//                     <div className="">
//                       <img
//                         style={{
//                           width: "200px",
//                           height: "200px",
//                           borderRadius: "50%",
//                           objectFit: "cover",
//                           border: "4px solid green"
//                         }}

//                         src={AddUsers} alt="" />
//                       <InputText
//                         type="file"
//                         accept=''
//                         onChange={(event) => {
//                           const file = event.target.files[0];
//                           if (file && file.type.substring(0, 5) === "image") {
//                             setimage(file);
//                           } else {
//                             setimage(null)
//                           }
//                         }} />
//                     </div>
//                   </div>
//                   <div className="col-25 AddUser_50">
//                     <label htmlFor="fname">First Name</label>
//                     <input
//                       className="AddUser_input"
//                       type="text"
//                       id="fname"
//                       name="firstname"
//                       placeholder=""
//                     />
//                     <label htmlFor="email">Email</label>
//                     <input
//                       className="AddUser_input"
//                       type="text"
//                       id="email"
//                       name="email"
//                       placeholder=""
//                     />
//                     <label htmlFor="adr"> Address</label>
//                     <input
//                       className="AddUser_input"
//                       type="text"
//                       id="adr"
//                       name="address"
//                       placeholder=""
//                     />
//                   </div>
//                   <div className="col-25 AddUser_50">
//                     <label htmlFor="cname">Last Name</label>
//                     <input
//                       className="AddUser_input"
//                       type="text"
//                       id="cname"
//                       name="cardname"
//                       placeholder=""
//                     />
//                     <label htmlFor="ccnum">Phone</label>
//                     <input
//                       className="AddUser_input"
//                       type="text"
//                       id="ccnum"
//                       name="cardnumber"
//                       placeholder=""
//                     />
//                     <label for="birthday">Birthday</label>
//                     <input
//                       type="date"
//                       id="birthday"
//                       name="birthday"
//                       placeholder=""
//                     />
//                   </div>
//                 </div>
//               </div>
//               <input
//                 type="submit"
//                 value="Continue to checkout"
//                 className="btn pay_btn"
//               />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddUsers;



import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const AddUsers = () => {

 



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
          <h4 className="main-txt-header">Add User</h4>

            <Link to="/admin/users" className="btn-login">
            All Users <i class="las la-list"></i> 
              </Link>

          </div>
        <div className="grid-input">
        <div className="input-groups">
        <label>Username</label>
               <input
                  className="AddCourses_input"
                type="text"
                 id="fname"
                  name="firstname"
                    placeholder=""
                 />

          </div>
          <div className="input-groups">
          <label>E-mail</label>
                  <input
                    className="AddCourses_input"
                    type="email"
                    placeholder=""
                  />
          </div>
          <div className="input-groups">
          <label>Password</label>
                  <input
                    className="AddCourses_input"
                    type="password"
                    placeholder=""
                  />
          </div>
          <div className="input-groups">
          <label>Re-Password</label>
                  <input
                    className="AddCourses_input"
                    type="password"
                    placeholder=""
                  />
          </div>
      
       
        <div className="btnContainer">
        <button className="btn-login" type="submit">
              Add
            </button>
          

            <Link to="/admin/users" className="btn-cancel">
            Cancel
              </Link>

        </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default AddUsers;
