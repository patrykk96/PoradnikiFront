/*eslint-disable*/
import React from "react";
import { NavLink, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav } from "reactstrap";

var ps;
var jwtDecode = require('jwt-decode');
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.state={
      routes: [
        {
          path: "/dashboard",
          name: "Strona główna",
          icon: "tim-icons icon-chart-pie-36",
          layout: "/admin"
        }
      ]
    }
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if(this.props.isAuthenticated) {
      let token = localStorage.getItem("token");
      let decodedToken = jwtDecode(token);
      let role = decodedToken.role;

      let routes =  [
        {
          path: "/dashboard",
          name: "Strona główna",
          icon: "tim-icons icon-chart-pie-36",
          layout: "/admin"
        },
        {
          path: "/user-guides",
          name: "Twoje poradniki",
          icon: "tim-icons icon-single-02",
          layout: "/admin"
        },
        {
          path: "/user-profile",
          name: "Profil użytkownika",
          icon: "tim-icons icon-badge",
          layout: "/admin"
        }
      ]
      if(role === "1"){
        routes.push({
          path: "/admin-panel",
          name: "Panel administratora",
          icon: "tim-icons icon-badge",
          layout: "/admin"
        },);
      }
      this.setState({
        routes: routes
      })
    }

    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  
  linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };

  render() {
    const { bgColor } = this.props;
    return (
      <div className="sidebar" data={bgColor}>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {this.state.routes.map((prop, key) => {
              if (prop.redirect) return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                    onClick={this.props.toggleSidebar}
                  >
                    <i className={prop.icon} />
                    <big><p>{prop.name}</p></big>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  bgColor: "primary"
};

Sidebar.propTypes = {
  bgColor: PropTypes.oneOf(["primary", "blue", "green"]),
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the text of the logo
    text: PropTypes.node,
    // the image src of the logo
    imgSrc: PropTypes.string
  })
};

export default Sidebar;
