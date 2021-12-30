import './App.css';
import ProductDetails from './components/ProductDetails';
import SideNavBar from './components/SideNavBar';
import Dashboard from './components/Dashboard';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <section className="container-fluid suplier_page product_list">
      <div className="content">
        <div className="sidebar suplier_sidebar sidebar--Collapse">
          <div className="img_bg_one">
            <img src="images/bg_login1.png" alt="..." />
          </div>
          <div className="img_bg_two">
            <img src="images/bg_login2.png" alt="..." />
          </div>
          <div className="collapseToggle">
            <img src="images/logo_login.png" alt="..." />
          </div>
        </div>
        <SideNavBar />
        <div className="main_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="top_area pb-50">
                  <div className="search_top">
                    <form className="form-inline">
                      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn" type="submit">
                        <span className="fa fa-search"></span>
                      </button>
                    </form>
                  </div>
                  <div className="profile_site">
                    <div className="navbar profile_nav">
                      <ul className="navbar-nav">
                        <li className="notification">
                          <a href="#">
                            <span className="fa fa-bell-o"></span>
                          </a>
                          <span className="notification_bell">23</span>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-toggle" href="#" id="navbarDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="fa fa-user-circle-o"></span>
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenu">
                            <a className="dropdown-item" href="#">
                              Edit Profile
                            </a>
                            <a className="dropdown-item" href="#">
                              Change Password
                            </a>
                            <a className="dropdown-item" href="#">
                              Logout
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Switch>
                  <Route path="/:id" component={ProductDetails} />
                  <Route path="/productDetails" component={ProductDetails} />
                  <Route path="/" exact component={Dashboard} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
