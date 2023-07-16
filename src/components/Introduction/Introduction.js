import { Button, Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";
export default function Introduction() {
    const handleGetInTouch = () => {
        const dynamicFormSection = document.querySelector("#Service");
        if (dynamicFormSection) {
          dynamicFormSection.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div className="introduction p-3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                            Tecnologías de la informacion{" "}
                            <span className="pt-2 pb-4">Hardware, Software, Redes y Comunicación.</span>
                        </h1>
                        <h4 className="d-flex container-actions mt-5 clase-justificado" >
                        Las tecnologías de la información (TI) se refieren al conjunto de herramientas, sistemas, infraestructuras y métodos utilizados 
                        para capturar, almacenar, procesar, transmitir y presentar información de manera digital. 
                        Las TI abarcan una amplia gama de tecnologías y disciplinas relacionadas que se utilizan en el ámbito de la informática y las comunicaciones.
                        </h4>
                        <div className="d-flex container-actions mt-5">
                            <div className="container-buttons">
                            <Button className="p-3" onClick={handleGetInTouch}>
                                Get in touch
                                </Button>
                                <Button className="p-3" onClick={handleGetInTouch}>
                                Get in touch
                                </Button>

                                {/* <Button
                                    className="p-3"
                                    onClick={() => console.log("click button1")}
                                >Get in touch</Button>
                                <Button className="p-3" >Get in touch</Button> */}
                            </div>
                            <div className="btn-start-create">
                                <a href="#dynamic-form">Start to create</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    
}
