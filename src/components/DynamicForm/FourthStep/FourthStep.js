import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Select from "react-select";
import Resume from "../Resume";

const options=[
    {id:1, value:"DB en memoria", label:"DB en memoria 📊"},
    {id:2, value:"sistema SAP", label:"SAP 📈"},
    {id:3, value:"Storage", label:"Storage 💾"},
    {id:4, value:"Middelware", label:"Middelware 🎚️"},
    {id:5, value:"Consultoría", label:"Consultoría ☎️"},
    {id:6, value:"Mantenimiento", label:"Mantenimiento ⚙️"},
    {id:7, value:"Gsetión de datos y análisis", label:"Gsetión de datos y análisis 📉"},
];

/*
<Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />*/

export default function SecondStep({setStep}) {
    const [selectOption, setSelectOption]=useState(null);
    const TISer= JSON.stringify(selectOption);
    localStorage.setItem("TI", TISer);
    const onChangeAdditionalTI = (e) =>{
        const sport = e.target.value;
        localStorage.setItem("additionalTI", sport);
    };
    const [modal, setModal]= useState(false);

    return (
        <div>
            <h2>Seleccion:</h2>
            <h4>Servicios adicionales</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5>Elige otros servicios:</h5>
                        <Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />
                    </Col>
                    <Col lg="7" className="mt-4">
                        <h5>Deseas algun servicio adicional ?</h5>
                        <Form.Control
                            type="text"
                            placeholder="Otro servicio"
                            onChange={(e) => onChangeAdditionalTI(e)}
                        />
                    </Col>
                </Row>

                <div className="send-form">
                    <p className="result p-3" onClick={()=> setModal(true)}>
                        View result 🙌
                    </p>
                </div>
                {modal && (
                    <Resume showModal={modal} setModal={setModal} setStep={setStep}/>
                )}

            </Container>
        </div>
    );
}
