import { Col, Row } from "react-bootstrap";
import Template from "./componens/template";

const who = () => {
    return(
        <Template>
            <div className="containerPage mt-2">
                <h1 className="text-center">Quienes somos</h1>
                <Row>
                    <Col>
                        <p>
                            This is the text that explains how we are and what we want

                        </p>
                    </Col>
                    <Col>
                        <p className="text-center">
                            This is an image
                        </p>
                    </Col>
                </Row>
            </div>
        </Template>
    )
}
export default who;