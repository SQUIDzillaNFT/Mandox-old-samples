import React from 'react';
import DashboardHeader from "../../Component/DashboardHeader";
import UserPanelHeader from "../../Component/UserPanelHeader";

function History() {
  return (
    <div>
      <DashboardHeader />
      <section className="user-panel-main-box">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="user-panel-main">
                <UserPanelHeader title="History" />
                <div className="user-store-area">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="transaction-history-box">
                        <div className="transaction-history-table theme-table">
                          <table>
                            <thead>
                            <tr>
                              <th>Date</th>
                              <th>Type</th>
                              <th>Status</th>
                              <th>Form</th>
                              <th>To</th>
                              <th>TX Hash</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>Fri Apr 02 2021 05:18:43 GMT</td>
                              <td>Purchase</td>
                              <td>
                                <div className="alert alert-success" role="alert">Success</div>
                              </td>
                              <td><a href="" target="_blank">0x7f07d4aF...</a></td>
                              <td><a href="" target="_blank">0x193e4718...</a></td>
                              <td><a href="" target="_blank">0x67b62a33...</a></td>
                            </tr>
                            <tr>
                              <td>Thu Apr 01 2021 10:45:47 GMT</td>
                              <td>Create</td>
                              <td>
                                <div className="alert alert-danger" role="alert">Cancel</div>
                              </td>
                              <td><a href="" target="_blank">0x99034414...</a></td>
                              <td><a href="" target="_blank">0xD925512F...</a></td>
                              <td><a href="" target="_blank">0x334bc030...</a></td>
                            </tr>
                            <tr>
                              <td>Thu Apr 01 2021 09:39:34 GMT</td>
                              <td>Buy Votes</td>
                              <td>
                                <div className="alert alert-success" role="alert">Success</div>
                              </td>
                              <td><a href="" target="_blank">0x99034414...</a></td>
                              <td>...</td>
                              <td><a href="" target="_blank">0x34a9bbec...</a></td>
                            </tr>
                            <tr>
                              <td>Thu Apr 01 2021 10:13:53 GMT</td>
                              <td>Mint</td>
                              <td>
                                <div className="alert alert-warning" role="alert">Pending</div>
                              </td>
                              <td><a href="" target="_blank">0x99034414...</a></td>
                              <td><a href="" target="_blank">0x193e4718...</a></td>
                              <td><a href="" target="_blank">0x0ec46cb0...</a></td>
                            </tr>
                            <tr>
                              <td>Thu Apr 01 2021 09:30:07 GMT</td>
                              <td>Transfer</td>
                              <td>
                                <div className="alert alert-warning" role="alert">Pending</div>
                              </td>
                              <td><a href="" target="_blank">0x99034414...</a></td>
                              <td>...</td>
                              <td><a href="" target="_blank">0x92f38836...</a></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History;
