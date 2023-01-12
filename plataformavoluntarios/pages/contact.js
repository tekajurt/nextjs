import Template from "./componens/template";
import {BsInstagram, BsFacebook, BsWhatsapp} from "react-icons/bs";
import { Row,Col, Form,Button  } from "react-bootstrap";
const contact= () => {
    return(
        
            <Template>
            <h1>
                Contactos
            </h1>
            <Form className="text-start m-2" method="POST">
                <Form.Group>
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="input" placeholder="Asunto" required/>
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} required/>
                </Form.Group>
                <Form.Group>
                    <Button type="submit">Enviar</Button>
                </Form.Group>
            </Form>
            <Row>
                <Col><BsInstagram /> Instagram</Col>
                <Col><BsFacebook />Facebook</Col>
                <Col><BsWhatsapp />Whatsapp</Col>
            </Row>
            </Template>
        
    )
}
export default contact;