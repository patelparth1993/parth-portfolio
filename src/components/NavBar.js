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
    console.log(window.pageYOffset);
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
      <Navbar dark expand='lg' className={this.state.navClass}>
        <Container>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={toggle} navbar>
            <Nav navbar>
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
