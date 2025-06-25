import {Col, Button, Card} from "react-bootstrap";
const CardCita = () => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Mascota: firulais <br/><span className="badge text-bg-primary ">Fecha: 25/06/25 - Hora: 10:00</span></Card.Title>
          <Card.Text>
            <b>Dueño:</b> Juan Perez
            <br/>
            <b>Sintomas:</b> los sintomas de la mascota
          </Card.Text>
          <Button variant="danger">Borrar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCita;
