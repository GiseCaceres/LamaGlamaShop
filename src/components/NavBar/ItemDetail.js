import ItemCount from "./itemCount";
import {useState} from 'react'; 
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({producto}) => {

    const [itemCount, setItemCount] = useState (0);

    const onAdd = (qty) => {
        alert("Selecciono " + qty + " productos");
        setItemCount(qty);
    }

    return(
        
        <div className="text-center" style={{ margin: '5rem'}}>
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={producto.image}/>
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Stock: {producto.stock}</ListGroupItem>
                    <ListGroupItem>{producto.cost}</ListGroupItem>
                </ListGroup>
                {
                itemCount === 0
                ?<ItemCount stock={producto.stock} initial={itemCount} onAdd={onAdd}/>
                : <Button variant="danger" ><Link to='/Cart' style={{textDecoration: "none", color: "black"}}>Verificar pedido</Link></Button>
                
            }
            </Card>  
        
        </div>
    )
}

export default ItemDetail;