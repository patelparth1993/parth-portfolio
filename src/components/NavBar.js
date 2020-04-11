import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
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
      toggle: !this.state.toggle,
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
    const { toggle } = this.state;
    return (
      <Navbar dark expand='sm' className={this.state.navClass}>
        <Container>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={toggle} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='#'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
//<NavLink href='https://github.com/reactstrap/reactstrap'>
//GitHub
//</NavLink>
export default NavBar;
