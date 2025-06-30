import {Col, Button, Card} from "react-bootstrap";
const CardCita = ({cita, borrarCita}) => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Mascota: {cita.mascota} <br/><span className="badge text-bg-primary ">Fecha: {cita.fecha} - Hora: {cita.hora}</span></Card.Title>
          <Card.Text>
            <b>Dueño:</b> {cita.duenio}
            <br/>
            <b>Sintomas:</b> {cita.sintomas}
          </Card.Text>
          <Button variant="danger" onClick={()=>borrarCita(cita)}>Borrar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardCita;
