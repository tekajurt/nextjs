import Template from "./componens/template";
import Carousel from "./componens/carrusel";
import { Col, Row } from "react-bootstrap";
import Carta from "./componens/card";
const proyects = () => {
    return (
        <Template>
            <h1>Proyectos</h1>
            <Carousel />
            <Row>
            <Col><Carta /></Col>
            <Col><Carta /></Col>
            <Col><Carta /></Col>



            </Row>
        </Template>
    );
}
export default proyects;