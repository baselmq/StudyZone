import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="brand">
  
          <img src="../Images/logo-no-background.png" className="admin-img" alt=""></img>
          <span>StudyZone</span>
        </div>
        <div className="sidebar-avartar">
          <div>
            <img src="../Images/1.png" className="admin-img" alt=""></img>
          </div>
          <div className="avartar-info">
            <div className="avartar-text">
              <span>Admin</span>
            </div>
          </div>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <Link to="/admin" class="active">
                <span class="las la-adjust"></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/courses">
                <span className="las la-swatchbook"></span>
                <span>Courses</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/lessons">
                <span className="las la-book-reader"></span>
                <span>Lessons</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
                <span className="las la-user-cog"></span>
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="las la-sign-out-alt"></span>{" "}
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Sidebar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   const [activeLink, setActiveLink] = useState();

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (

//     <div className="sidebar">
    
//       {/* ...other sidebar content... */}
//       <div className="sidebar-menu">
//         <ul>
//           <li>
//             <Link
//               to="/admin"
//               onClick={() => handleLinkClick('/admin')}
//               className={activeLink === '/admin' ? 'active' : ''}
//             >
//               <span className="las la-adjust"></span>
//               <span>Dashboard</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/courses"
//               className={activeLink === '/admin/courses' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin/courses')}
//             >
//               <span className="las la-swatchbook"></span>
//               <span>Courses</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/lessons"
//               className={activeLink === '/admin/lessons' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin/lessons')}
//             >
//               <span className="las la-book-reader"></span>
//               <span>Lessons</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/users"
//               className={activeLink === '/admin/users' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin/users')}
//             >
//               <span className="las la-user-cog"></span>
//               <span>Users</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="#">
//               <span className="las la-sign-out-alt"></span>{" "}
//               <span>Logout</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   const [activeLink, setActiveLink] = useState('/admin');

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   return (
//     <div className="sidebar">
//       {/* ...other sidebar content... */}
//       <div className="sidebar-menu">
//         <ul>
//           <li>
//             <Link
//               to="/admin"
//               className={activeLink === '/admin' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin')}
//             >
//               <span className="las la-adjust"></span>
//               <span>Dashboard</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/courses"
//               className={activeLink === '/admin/courses' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin/courses')}
//             >
//               <span className="las la-swatchbook"></span>
//               <span>Courses</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/lessons"
//               className={activeLink === '/admin/lessons' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin/lessons')}
//             >
//               <span className="las la-book-reader"></span>
//               <span>Lessons</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/users"
//               className={activeLink === '/admin/users' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin/users')}
//             >
//               <span className="las la-user-cog"></span>
//               <span>Users</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="#">
//               <span className="las la-sign-out-alt"></span>{" "}
//               <span>Logout</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   const [activeLink, setActiveLink] = useState('/admin');

//   const handleLinkClick = (link) => {
//     alert(link);
//     alert(activeLink);

//     if (activeLink !== link) {
//       setActiveLink(link);
//     }
//     alert(activeLink);
//   };

//   return (
//     <div className="sidebar">
//       {/* ...other sidebar content... */}
//       <div className="sidebar-menu">
//         <ul>
//           <li>
//             <Link
//               to="/admin"
//               className={activeLink === '/admin' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin')}
//             >
//               <span className="las la-adjust"></span>
//               <span>Dashboard</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/courses"
//               className={activeLink === '/admin/courses' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin/courses')}
//             >
//               <span className="las la-swatchbook"></span>
//               <span>Courses</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/lessons"
//               className={activeLink === '/admin/lessons' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin/lessons')}
//             >
//               <span className="las la-book-reader"></span>
//               <span>Lessons</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/admin/users"
//               className={activeLink === '/admin/users' ? 'active' : ''}
//               onClick={() => handleLinkClick('/admin/users')}
//             >
//               <span className="las la-user-cog"></span>
//               <span>Users</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="#">
//               <span className="las la-sign-out-alt"></span>{" "}
//               <span>Logout</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
