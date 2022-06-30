import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, Dropdown, NavItem, NavLink } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../image/logo.png';


import './CSS/navbar.css'

function LinkContainerDropdown(props){
  return(
    <NavDropdown.Item>
      <LinkContainer to={props.route}>
        <Nav.Link>{props.name}</Nav.Link>
      </LinkContainer>
    </NavDropdown.Item>
  );
}

function navbar() {
  const margin = {
    margin: '0px 40px',
  }

  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
    
      <LinkContainer to="/web/" style={margin}>
        <Navbar.Brand><img src={Logo} style={{height:'30px'}}/> PC Component World</Navbar.Brand>
      </LinkContainer>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <LinkContainer to="/web/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          {/* <Dropdown as={NavItem} >
            <Dropdown.Toggle as={NavLink}>Browse Components</Dropdown.Toggle>
            <Dropdown.Menu style={{width:"1000px"}}>
              <Container className="dropdown-wrapper">
                <Container>
                  <ul className="ul-padding">
                    <li>
                        <NavDropdown.Item>
                          <LinkContainer to="/">
                            <Nav.Link><b>CPU</b></Nav.Link>
                          </LinkContainer>
                        </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item>
                        <LinkContainer to="/">
                          <Nav.Link>AMD</Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item>
                        <LinkContainer to="/">
                          <Nav.Link>Intel</Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>
                    </li>
                  </ul>
                </Container>
                <Container>
                  <ul className="ul-padding">
                    <li>
                        <NavDropdown.Item>
                          <LinkContainer to="/">
                            <Nav.Link><b>CPU</b></Nav.Link>
                          </LinkContainer>
                        </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item>
                        <LinkContainer to="/">
                          <Nav.Link>AMD</Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>
                    </li>
                    <li>
                      <NavDropdown.Item>
                        <LinkContainer to="/">
                          <Nav.Link>Intel</Nav.Link>
                        </LinkContainer>
                      </NavDropdown.Item>
                    </li>
                  </ul>
                </Container>
              </Container>
            </Dropdown.Menu>
          </Dropdown> */}

          <NavDropdown title="CPU" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/web/component/cpu_amd" name="AMD"/>
            <LinkContainerDropdown route="/web/component/cpu_intel" name="Intel"/>  
            <LinkContainerDropdown route="/web/component/cpu" name="All"/>  
          </NavDropdown>

          <NavDropdown title="GPU" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/web/" name="AMD"/>
            <LinkContainerDropdown route="/web/" name="Nvidia"/>
            <LinkContainerDropdown route="/web/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Memory" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/web/" name="Crucial"/>
            <LinkContainerDropdown route="/web/" name="Corsair"/>
            <LinkContainerDropdown route="/web/" name="G.Skill"/>
            <LinkContainerDropdown route="/web/" name="Kingston"/>
            <LinkContainerDropdown route="/web/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Motherboard" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/web/" name="ASRock"/>
            <LinkContainerDropdown route="/web/" name="Asus"/>
            <LinkContainerDropdown route="/web/" name="EVGA"/>
            <LinkContainerDropdown route="/web/" name="Gigabyte"/>
            <LinkContainerDropdown route="/web/" name="MSI"/>
            <LinkContainerDropdown route="/web/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Storage" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/web/" name="Crucial"/>
            <LinkContainerDropdown route="/web/" name="Kingston"/>
            <LinkContainerDropdown route="/web/" name="Samsung"/>
            <LinkContainerDropdown route="/web/" name="Seagate"/>
            <LinkContainerDropdown route="/web/" name="Western Digital"/>
            <LinkContainerDropdown route="/web/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Power Supplies" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/web/" name="Asus"/>
            <LinkContainerDropdown route="/web/" name="Cooler Master"/>
            <LinkContainerDropdown route="/web/" name="Corsair"/>
            <LinkContainerDropdown route="/web/" name="EVGA"/>
            <LinkContainerDropdown route="/web/" name="Gigabyte"/>
            <LinkContainerDropdown route="/web/" name="MSI"/>
            <LinkContainerDropdown route="/web/" name="SeaSonic"/>
            <LinkContainerDropdown route="/web/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Case" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/web/" name="Cooler Master"/>
            <LinkContainerDropdown route="/web/" name="Corsair"/>
            <LinkContainerDropdown route="/web/" name="Lian Li"/>
            <LinkContainerDropdown route="/web/" name="MSI"/>
            <LinkContainerDropdown route="/web/" name="NZXT"/>
            <LinkContainerDropdown route="/web/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Monitor" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/web/" name="Acer"/>
            <LinkContainerDropdown route="/web/" name="Alienware"/>
            <LinkContainerDropdown route="/web/" name="AOC"/>
            <LinkContainerDropdown route="/web/" name="Asus"/>
            <LinkContainerDropdown route="/web/" name="Dell"/>
            <LinkContainerDropdown route="/web/" name="LG"/>
            <LinkContainerDropdown route="/web/" name="MSI"/>
            <LinkContainerDropdown route="/web/" name="Samgsung"/>
            <LinkContainerDropdown route="/web/" name="All"/>
          </NavDropdown>
        </Nav>
        <Form className="d-flex" style={margin}>
          <FormControl style={{ width:'300px' }}
            type="search"
            placeholder="Search For PC Components"
            className="me-2"
            aria-label="Search"
          />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
  );
}

export default navbar;