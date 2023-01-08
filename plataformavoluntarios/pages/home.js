import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Carrusel from "./carrusel";

const home = () => {
    return (
        <div id="Home"className="container m-auto text-dark">
            <h1 className="text-center m-2">Comité ambiental comunal</h1>
            <Carrusel />
            <Row className="m-5">
                <Col><Image src="/favicon.ico"></Image></Col>
                <Col className="text-center">
                    <p>texto culiao inutil que sale del teclado de este sacowea por la xuxa que rabia</p>
                    <Button variant="primary">Inscribirse</Button>
                </Col>
            </Row>
        </div>
    )
}
export default home;