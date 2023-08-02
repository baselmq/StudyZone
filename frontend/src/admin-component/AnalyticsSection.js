import React from 'react';

const AnalyticsSection = () => {
  return (
    <section>
      <h3 className="section-head">Overview</h3>
      <div className="analytics">
        <div className="analytic">
            <div className="analytic-icon">
                <span className="las la-eye"></span>
            </div>

            <div className="analytic-info">
              <h4> Total Views </h4>
                <h1>10.3M</h1>
          </div>
        </div>

        <div className="analytic">
          <div className="analytic-icon">
              <span className="las la-clock"></span>
          </div>

          <div className="analytic-info">
            <h4> Watch Time (hrs)</h4>
              <h1>20.9K <small className="text-danger"> 5%</small></h1>
        </div>
      </div>


      <div className="analytic">
        <div className="analytic-icon">
            <span className="las la-users"></span>
        </div>

        <div className="analytic-info">
          <h4> Subscribers</h4>
            <h1>1.3K <small className="text-success"> 12%</small></h1>
      </div>
    </div>

    <div className="analytic">
      <div className="analytic-icon">
          <span className="las la-heart"></span>
      </div>

      <div className="analytic-info">
        <h4> Total like</h4>
          <h1>4.3m </h1>
    </div>
  </div>

  </div>

    </section>
  );
};

export default AnalyticsSection;
