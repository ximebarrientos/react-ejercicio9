import { Row} from "react-bootstrap";
import CardCita from "./CardCita";

const GrillaCitas = ({citas, borrarCita}) => {
  return (
    <div>
      <Row xs={1} md={2} lg={4} className="row-gap-2 mt-4">
        {
            citas.map((cita)=><CardCita key={indice} cita={cita.id} borrarCita={borrarCita}></CardCita>)
        }
        
      </Row>
      
    </div>
  );
};

export default GrillaCitas;
