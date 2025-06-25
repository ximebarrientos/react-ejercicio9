import { Row} from "react-bootstrap";
import CardCita from "./CardCita";

const GrillaCitas = () => {
  return (
    <div>
      <Row xs={1} md={2} lg={4} className="row-gap-2 mt-4">
        <CardCita></CardCita>
      </Row>
      
    </div>
  );
};

export default GrillaCitas;
