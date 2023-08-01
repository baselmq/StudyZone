import React from 'react';

const AnalyticsSection = () => {
  return (
    <section>
      <h3 class="section-head">Overview</h3>
      <div class="analytics">
        <div class="analytic">
            <div class="analytic-icon">
                <span class="las la-eye"></span>
            </div>

            <div class="analytic-info">
              <h4> Total Views </h4>
                <h1>10.3M</h1>
          </div>
        </div>

        <div class="analytic">
          <div class="analytic-icon">
              <span class="las la-clock"></span>
          </div>

          <div class="analytic-info">
            <h4> Watch Time (hrs)</h4>
              <h1>20.9K <small class="text-danger"> 5%</small></h1>
        </div>
      </div>


      <div class="analytic">
        <div class="analytic-icon">
            <span class="las la-users"></span>
        </div>

        <div class="analytic-info">
          <h4> Subscribers</h4>
            <h1>1.3K <small class="text-success"> 12%</small></h1>
      </div>
    </div>

    <div class="analytic">
      <div class="analytic-icon">
          <span class="las la-heart"></span>
      </div>

      <div class="analytic-info">
        <h4> Total like</h4>
          <h1>4.3m </h1>
    </div>
  </div>

  </div>

    </section>
  );
};

export default AnalyticsSection;
