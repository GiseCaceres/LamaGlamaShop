import {Navbar,Nav,Container} from 'react-bootstrap';
import Icons from './CartWidget';
import {Link} from 'react-router-dom';


const NavBarComp = ({carrito}) =>{
    console.log(carrito);

        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to='/' style={{color: 'white', textDecoration: 'none'}}>LamaGlama Shop</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to='/' style={{color: 'white', textDecoration: 'none'}}>HOME</Link></Nav.Link>
                                <Nav.Link><Link to='/categoryId/1' style={{color: 'white', textDecoration: 'none'}}>LENTES</Link></Nav.Link>
                                <Nav.Link><Link to='/categoryId/2' style={{color: 'white', textDecoration: 'none'}}>MEDIAS</Link></Nav.Link>
                                <Nav.Link><Link to='/categoryId/3' style={{color: 'white', textDecoration: 'none'}}>CUADERNOS</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Icons carrito={carrito} />
                    </Container>
                </Navbar>
            </div>
        )
}

export default NavBarComp;