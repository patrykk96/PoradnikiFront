import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbar/Navbar.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import { connect } from "react-redux";
import routes from "routes.js";

import Dashboard from "../../views/Dashboard.jsx";
import UserGuides from "../../views/UserGuides.jsx";
import AdminPanel from "../../views/AdminPanel.jsx";
import UserProfile from "../../views/UserProfile.jsx";

var ps;

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  

  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };

  getRoutes = routes => {
    return routes.map((prop, key) => {
      const ComponentName = prop.component;
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.layout + prop.path} key={key} 
          render={(props) => <ComponentName {...props} isAuthenticated={this.props.isAuthenticated} />}  />
        );
      } else {
        return null;
      }
    });
  };

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
  
    return (
      <>
        <div className="wrapper">
        <Sidebar
            {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            toggleSidebar={this.toggleSidebar}
          />
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            <AdminNavbar
              {...this.props}
              brandText={this.getBrandText(this.props.location.pathname)}
              toggleSidebar={this.toggleSidebar}
              sidebarOpened={this.state.sidebarOpened}
              logout={this.props.logout}
              isAuthenticated={this.props.isAuthenticated}
            />

              <Switch>{this.getRoutes(routes)}</Switch>
          </div>
        </div>
     
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: localStorage.getItem('token') !== null
  };
};

export default withRouter(connect(mapStateToProps)(Admin));