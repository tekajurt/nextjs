import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Carrusel from "./componens/carrusel";
import Template from "./componens/template"
const home = () => {

    return (
        <Template >
            <div id="Home"className="container m-auto text-dark">
                <h1 className="text-center m-2">Comité ambiental comunal</h1>
                <Carrusel />
                <Row  className="mt-2">
                    <Col className="m-auto"><Image src="/favicon.ico"></Image></Col>
                    <Col className="text-center">
                        <p>Texto genérico</p>
                        <Button variant="primary" href="/join">Inscribirse</Button>
                    </Col>
                </Row>
            </div>
        </Template>
    )
}
export default home;