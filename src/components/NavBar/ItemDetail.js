import ItemCount from "./itemCount";
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';
const {addCarrito} = require  ("../NavBar/itemCount");

const ItemDetail = ({producto}) => {
    return(
        
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={productos.image} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>🔥 ATRAPALOS YA 🌱</ListGroupItem>
                    <ListGroupItem>{producto.stock}</ListGroupItem>
                    <ListGroupItem>{producto.cost}</ListGroupItem>
                </ListGroup>
                <ItemCount addCarrito={addCarrito} stock={10} initial={0}/>
            </Card>  
  
        </>
    )
}

export default ItemDetail;