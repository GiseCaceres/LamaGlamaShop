import ItemCount from "./itemCount";
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';
const {addCarrito} = require  ("../NavBar/itemCount");

const ItemDetail = ({producto}) => {
    return(
        
        <div style={{ margin: '5rem'}}>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={producto.image}/>
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{producto.stock}</ListGroupItem>
                    <ListGroupItem>{producto.cost}</ListGroupItem>
                </ListGroup>
                <ItemCount addCarrito={addCarrito} stock={producto.stock} initial={0}/>
            </Card>  
  
        </div>
    )
}

export default ItemDetail;