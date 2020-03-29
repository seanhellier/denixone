import React, {
  Component,
  Fragment
} from "react";
import "./AppNavbar/ AppNavbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText
} from "reactstrap";
import {
  connect
} from "react-redux";
import PropTypes from "prop-types";
// import RegisterModal from "./auth/RegisterModal";
// import LoginModal from "./auth/LoginModal";
// import Logout from "./auth/Logout";
// import SearchCollapse from "./SearchCollapse";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    // const { isAuthenticated, user } = this.props.auth;

    // const authLinks = (
    //   <Fragment>
    //     <NavItem>
    //       <span className="navbar-text mr-3">
    //         <strong>{user ? `Welcome ${user.name}` : ""}</strong>
    //       </span>
    //     </NavItem>
    //     <NavItem>
    //       <Logout />
    //     </NavItem>
    //   </Fragment>
    // );

    // const guestLinks = (
    //   <Fragment>
    //     <NavItem>
    //       <RegisterModal />
    //     </NavItem>
    //     <NavItem>
    //       <LoginModal />
    //     </NavItem>
    //   </Fragment>
    // );

    return ( <
      div >
      <
      Navbar dark expand = "sm"
      className = "appnavbar" >
      <
      Container >
      <
      h1 className = "logo" > DeniZone NYC < /h1> {
        /* <NavbarBrand className="logo" href="/">
                      PRISM NYC
                    </NavbarBrand> */
      } {
        /* <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto drop" navbar>
                        {isAuthenticated ? authLinks : guestLinks}
                      </Nav>
                    </Collapse> */
      } <
      /Container> <
      /Navbar> <
      /div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavbar);