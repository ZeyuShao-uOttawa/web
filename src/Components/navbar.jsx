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
    
      <LinkContainer to="/" style={margin}>
        <Navbar.Brand><img src={Logo} style={{height:'30px'}}/> PC Component World</Navbar.Brand>
      </LinkContainer>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <LinkContainer to="/">
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
            <LinkContainerDropdown route="/component/cpu_amd" name="AMD"/>
            <LinkContainerDropdown route="/component/cpu_intel" name="Intel"/>  
            <LinkContainerDropdown route="/component/cpu" name="All"/>  
          </NavDropdown>

          <NavDropdown title="GPU" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/" name="AMD"/>
            <LinkContainerDropdown route="/" name="Nvidia"/>
            <LinkContainerDropdown route="/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Memory" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/" name="Crucial"/>
            <LinkContainerDropdown route="/" name="Corsair"/>
            <LinkContainerDropdown route="/" name="G.Skill"/>
            <LinkContainerDropdown route="/" name="Kingston"/>
            <LinkContainerDropdown route="/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Motherboard" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/" name="ASRock"/>
            <LinkContainerDropdown route="/" name="Asus"/>
            <LinkContainerDropdown route="/" name="EVGA"/>
            <LinkContainerDropdown route="/" name="Gigabyte"/>
            <LinkContainerDropdown route="/" name="MSI"/>
            <LinkContainerDropdown route="/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Storage" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/" name="Crucial"/>
            <LinkContainerDropdown route="/" name="Kingston"/>
            <LinkContainerDropdown route="/" name="Samsung"/>
            <LinkContainerDropdown route="/" name="Seagate"/>
            <LinkContainerDropdown route="/" name="Western Digital"/>
            <LinkContainerDropdown route="/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Power Supplies" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/" name="Asus"/>
            <LinkContainerDropdown route="/" name="Cooler Master"/>
            <LinkContainerDropdown route="/" name="Corsair"/>
            <LinkContainerDropdown route="/" name="EVGA"/>
            <LinkContainerDropdown route="/" name="Gigabyte"/>
            <LinkContainerDropdown route="/" name="MSI"/>
            <LinkContainerDropdown route="/" name="SeaSonic"/>
            <LinkContainerDropdown route="/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Case" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/" name="Cooler Master"/>
            <LinkContainerDropdown route="/" name="Corsair"/>
            <LinkContainerDropdown route="/" name="Lian Li"/>
            <LinkContainerDropdown route="/" name="MSI"/>
            <LinkContainerDropdown route="/" name="NZXT"/>
            <LinkContainerDropdown route="/" name="All"/>
          </NavDropdown>

          <NavDropdown title="Monitor" id="navbarScrollingDropdown">
            <LinkContainerDropdown route="/" name="Acer"/>
            <LinkContainerDropdown route="/" name="Alienware"/>
            <LinkContainerDropdown route="/" name="AOC"/>
            <LinkContainerDropdown route="/" name="Asus"/>
            <LinkContainerDropdown route="/" name="Dell"/>
            <LinkContainerDropdown route="/" name="LG"/>
            <LinkContainerDropdown route="/" name="MSI"/>
            <LinkContainerDropdown route="/" name="Samgsung"/>
            <LinkContainerDropdown route="/" name="All"/>
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