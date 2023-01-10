import Template from "./componens/template";
import Carousel from "./componens/carrusel";
import { Col, Row } from "react-bootstrap";
const proyects = () => {
    return (
        <Template>
            <h1>Proyectos</h1>
            <Carousel />
            <Row>
                <Col>card</Col>
                <Col>card</Col>
                <Col>card</Col>
            </Row>
        </Template>
    );
}
export default proyects;