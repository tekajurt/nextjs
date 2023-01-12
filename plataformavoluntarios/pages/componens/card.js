import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modals from './modal';

const Carta = () => {
  return (
    <Card>
      <Card.Header>Proyecto</Card.Header>
      <Card.Body>
        <Card.Title>Titulo del proyecto</Card.Title>
        <Card.Text>
          Descripción del texto
        </Card.Text>
        <Modals />
      </Card.Body>
    </Card>
  );
}

export default Carta;