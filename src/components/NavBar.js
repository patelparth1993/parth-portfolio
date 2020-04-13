import React from "react";
import { Navbar, Nav, NavItem, NavLink, Container } from "reactstrap";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSlickMenu: false,
      navClass: "", //mb-5
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  toggleNavbar = () => {
    this.setState({
      openSlickMenu: !this.state.openSlickMenu,
    });
  };

  closeSlickMenu = () => {
    console.log("mouse out");
    this.setState({
      openSlickMenu: false,
    });
  };

  handleScroll = () => {
    if (window.pageYOffset >= 450) {
      this.setState({
        navClass: "sticky",
      });
    } else {
      this.setState({
        navClass: "",
      });
    }
  };

  render() {
    const { openSlickMenu } = this.state;
    return (
      <Navbar dark expand='lg' className={this.state.navClass}>
        <Container>
          <div className={openSlickMenu ? "slickMenu show" : "slickMenu "}>
            <button
              aria-label='Toggle navigation'
              type='button'
              className={
                openSlickMenu ? "navbar-toggler close" : "navbar-toggler"
              }
              onClick={this.toggleNavbar}
            >
              <span
                className='navbar-toggler-icon'
                hidden={openSlickMenu}
              ></span>
              <span hidden={!openSlickMenu}>X</span>
            </button>
            <Nav navbar onBlur={this.closeSlickMenu}>
              <NavItem>
                <NavLink href='#about'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#experience'>Experience</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href='#projects'>Projects</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink href='#skills'>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#education'>Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#contactMe'>Contact</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Container>
      </Navbar>
    );
  }
}
//<NavLink href='https://github.com/reactstrap/reactstrap'>
//GitHub
//</NavLink>
export default NavBar;
