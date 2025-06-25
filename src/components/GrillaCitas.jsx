import { Row} from "react-bootstrap";
import CardCita from "./CardCita";

const GrillaCitas = ({citas}) => {
  return (
    <div>
      <Row xs={1} md={2} lg={4} className="row-gap-2 mt-4">
        {
            citas.map((cita,indice)=><CardCita key={indice} cita={cita}></CardCita>)
        }
        
      </Row>
      
    </div>
  );
};

export default GrillaCitas;
