import React from 'react';

const BlockGridSection = () => {
  return (
    <section>
 
        <div className="block-grid">
          <div className="revenue-card">
            <h3 className="section-head">Total Revenue</h3>

              <div className="rev-content">
           
                <img src='../Images/1.png' className='admin-img' alt=''></img>
                    <div className="rev-info">
                      <h3>Saadeh</h3>
                      <h1>3.5M <small>Subscribers</small></h1>
                    </div>
                    <div className="rev-sum">
                      <h4>Total income</h4>
                      <h2>$21,875</h2>
                    </div>
              </div>
          </div>

          <div className="graph-card">
            <h3 className="section-head">graph</h3>
            <div className="graph-content">
              <div className="graph-head">
                <div className="icon-wrapper">
                  <div className="admin-icon">
                    <span className="las la-eye text-main"></span>
                  </div>
                  <div className="admin-icon">
                    <span className="las la-clock text-success"></span>
                  </div>
                </div>
                <div className="graph-select">
                  <select name="" id="">
                    <option value="">Septemper</option>
                  </select>
                </div>
              </div>
            <div className="graph-board">
              <canvas id="revenueChart" width="100%" height="50px"></canvas>
            </div>  
            </div>
          </div>

    </div>
      </section>
  );
};

export default BlockGridSection;
