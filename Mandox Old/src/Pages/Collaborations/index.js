import React from 'react';
import {Link} from "react-router-dom";

function Collaborations(props) {

  return (
    <div>
      <section className="bradcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="bradcrumb-main">
                <div className="bradcrumb-title">
                  <h1>Collaborations</h1>
                </div>
                <div className="bradcrumb-right clearfix">
                  <ul className="clearfix">
                    <li><Link to="/">Home</Link></li>
                    <li>Collaborations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="collaboration-area page-paddings text-center" style={{minHeight: '100vh', marginTop: 'auto', marginBottom: 'auto', color: 'white'}}>
        <div>
          <h3>Officially Licensed NFT's <br/>
            Coming Soon</h3>
        </div>

      </section>
    </div>
  )
}

export default Collaborations;
