// import React from "react";
import "../style/addUsers.css"
import React, { useState } from 'react';
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';


// const FileUploadComponent = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   }};
const AddUsers = () => {
  const [image, setimage] = useState("")

  return (
    <div className="AddUser">
      <div className="row AddUser_row">
        <div className="col-75 AddUser_75">
          <div className="container AddUser_container">
            <form action="/">
              <div className="User_form">

                <div className="row AddUser_row">
                  {/* <div className="profile_img">
                    <div className="">
                      <img
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "4px solid green"
                        }}

                        src={AddUsers} alt="" />
                      <InputText
                        type="file"
                        accept=''
                        onChange={(event) => {
                          const file = event.target.files[0];
                          if (file && file.type.substring(0, 5) === "image") {
                            setimage(file);
                          } else {
                            setimage(null)
                          }
                        }} />
                    </div>
                  </div> */}
                  <div className="col-25 AddUser_50">
                    <label htmlFor="fname">First Name</label>
                    <input
                      className="AddUser_input"
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder=""
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      className="AddUser_input"
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                    />
                    <label htmlFor="adr"> Address
                    </label>
                    <input
                      className="AddUser_input"
                      type="text"
                      id="adr"
                      name="address"
                      placeholder=""
                    />
                  </div>
                  <div className="col-25 AddUser_50">
                    <label htmlFor="cname">Last Name</label>
                    <input
                      className="AddUser_input"
                      type="text"
                      id="cname"
                      name="cardname"
                      placeholder=""
                    />
                    <label htmlFor="ccnum">Phone</label>
                    <input
                      className="AddUser_input"
                      type="text"
                      id="ccnum"
                      name="cardnumber"
                      placeholder=""
                    />
                    <label for="birthday">Birthday</label>
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <input type="submit" value="Continue to checkout" className="btn pay_btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
