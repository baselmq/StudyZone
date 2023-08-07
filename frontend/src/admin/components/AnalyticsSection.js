import React from 'react';

const AnalyticsSection = () => {
  return (
    <section>
      <h3 className="section-head">Overview</h3>
      <div className="analytics">
        <div className="analytic">
            <div className="analytic-icon">
                <span className="las la-users"></span>
           
            </div>

            <div className="analytic-info">
              <h4> Total Users </h4>
                <h1>17</h1>
          </div>
        </div>

        <div className="analytic">
          <div className="analytic-icon">
              <span className="las la-laptop-code"></span>
          </div>

          <div className="analytic-info">
            <h4> Courses </h4>
              <h1>7 </h1>
        </div>
      </div>


      <div className="analytic">
        <div className="analytic-icon">
            <span className="las la-book-reader"></span>
        </div>

        <div className="analytic-info">
          <h4> Lessons</h4>
            <h1>20</h1>
      </div>
    </div>

    <div className="analytic">
      <div className="analytic-icon">
          <span className="las la-user-graduate"></span>
      </div>

      <div className="analytic-info">
        <h4> Students </h4>
          <h1>16 </h1>
    </div>
  </div>

  </div>

    </section>
  );
};

export default AnalyticsSection;

