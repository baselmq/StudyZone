import React from "react";
import "./categories.css";

const CategoryCard = ({ icon, title, description }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6  mb-4">
      <div className="card mx-auto card_topCategories">
        <div className="card-body">
          <div className="icon-wrapper">
            <i className={`fa-solid ${icon}`}></i>
          </div>
          <h5 className="card-title card_title_topCategories fw-bold py-2">
            {title}
          </h5>
          <p className="card-text desc_of_topCategories">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  const categoryData = [
    {
      icon: "fa-file-invoice",
      title: "Customer Tracking & Attendance",
      description: "Schedule and reserve classroom of student attendance.",
    },
    {
      icon: "fa-calendar-days",
      title: "Easy Scheduling & Attendance Tracking",
      description: "Schedule and reserve classroom of student attendance.",
    },
    {
      icon: "fa-people-group",
      title: "Automate and Track Emails",
      description:
        "Automate and track emails to individuals or organizations and track emails.",
    },
    {
      icon: "fa-calendar-days",
      title: "Easy Scheduling & Attendance Tracking",
      description: "Schedule and reserve classroom of student attendance.",
    },
  ];

  return (
    <div className="container text-center" id="top-categories">
      <div className="row ">
        <h1 className="title_top-categories mb-5">
          <span>Top</span> Categories
        </h1>

        {categoryData.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
