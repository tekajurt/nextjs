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
                        <p>texto culiao inutil que sale del teclado de este sacowea por la xuxa que rabia</p>
                        <Button variant="primary">Inscribirse</Button>
                    </Col>
                </Row>
            </div>
        </Template>
    )
}
export default home;