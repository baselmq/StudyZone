import React from 'react';

const BlockGridSection = () => {
  return (
    <section>
 
        <div class="block-grid">
          <div class="revenue-card">
            <h3 class="section-head">Total Revenue</h3>

              <div class="rev-content">
           
                <img src='../Images/1.png' class='admin-img' alt=''></img>
                    <div class="rev-info">
                      <h3>Saadeh</h3>
                      <h1>3.5M <small>Subscribers</small></h1>
                    </div>
                    <div class="rev-sum">
                      <h4>Total income</h4>
                      <h2>$21,875</h2>
                    </div>
              </div>
          </div>

          <div class="graph-card">
            <h3 class="section-head">graph</h3>
            <div class="graph-content">
              <div class="graph-head">
                <div class="icon-wrapper">
                  <div class="icon">
                    <span class="las la-eye text-main"></span>
                  </div>
                  <div class="icon">
                    <span class="las la-clock text-success"></span>
                  </div>
                </div>
                <div class="graph-select">
                  <select name="" id="">
                    <option value="">Septemper</option>
                  </select>
                </div>
              </div>
            <div class="graph-board">
              <canvas id="revenueChart" width="100%" height="50px"></canvas>
            </div>  
            </div>
          </div>

    </div>
      </section>
  );
};

export default BlockGridSection;
