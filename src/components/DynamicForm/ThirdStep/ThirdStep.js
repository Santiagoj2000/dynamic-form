import "./ThirdStep.css";
import {
    Col,
    Container,
    FloatingLabel,
    Form,
    
    Row
}  from "react-bootstrap";


export default function ThirdStep({setStep}) {

    const onChangeComment = (e) =>{
        const comment= e.target.value;
        localStorage.setItem("comment", comment);
    };
    return(
        <div>
            <h2>Proposito</h2>
            <h4>Explicanos brebevente la finalidad de tu adquisicion y que servicio deseas.</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="10">
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Comments"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment"
                                onChange={(e) => onChangeComment(e) }
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
