import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNavBar extends Component {
  render() {
    return (
      <>
        <div className="sidebar suplier_sidebar sidebar--Collapse">
          <div className="img_bg_one">
            <img src="images/bg_login1.png" />
          </div>
          <div className="img_bg_two">
            <img src="images/bg_login2.png" />
          </div>
          <div className="collapseToggle">
            <img src="images/logo_login.png" />
          </div>

          <ul className="nav nav-sidebar">
            <li className="active">
              <Link to="/">
                <span className="fa fa-tachometer"></span>
                <span className="menuText">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/productDetails">
                <span className="fa fa-file-text"></span>
                <span className="menuText">Product Details</span>
              </Link>
            </li>
            <li>
              <a href="#" target="_blank">
                <span className="fa fa-users"></span>
                <span className="menuText">Clients</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <span className="fa fa-calendar-o"></span>
                <span className="menuText">Suppliers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-cog"></span>
                <span className="menuText">Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-line-chart"></span>
                <span className="menuText">Reports</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-sign-out"></span>
                <span className="menuText">Logout</span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- End sidebar --> */}

        {/* <!-- right responsive menu --> */}
        <div className="text-left responsive_modal">
          <button type="button" className="btn btn-demo" data-toggle="modal" data-target="#myModal">
            <span className="fa fa-bars"></span>
          </button>
        </div>
        {/* <!-- Modal --> */}
        <div className="modal left fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="myModalLabel">
                  <img src="images/logo_login.png" />
                </h4>
                {/* <!-- <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> --> */}
              </div>

              <div className="modal-body">
                <ul>
                  <li>
                    <a href="#">
                      <span className="fa fa-tachometer"></span>
                      <span className="rs_menu_text">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-file-text"></span>
                      <span className="rs_menu_text">Master Catalogue</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-users"></span>
                      <span className="rs_menu_text">Clients</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-calendar-o"></span>
                      <span className="rs_menu_text">Suppliers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-cog"></span>
                      <span className="rs_menu_text">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-line-chart"></span>
                      <span className="rs_menu_text">Reports</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-sign-out"></span>
                      <span className="rs_menu_text">Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- modal-content --> */}
          </div>
          {/* <!-- modal-dialog --> */}
        </div>
      </>
    );
  }
}

export default SideNavBar;
