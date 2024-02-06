import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Delete_Product } from '../JS/action';
import { useDispatch } from 'react-redux';

function Cards(props) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(Delete_Product(id));
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.el.posterUrl} />
      <Card.Body>
        <Card.Title>{props.el.title}</Card.Title>
        <Card.Text>
          {props.el.description}
        </Card.Text>
        <Button onClick={()=>handleDelete(props.el.id)}>effacer</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;