import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Select from "react-select";

const options=[
    {id:1, value:"Dell EMC", label:"Dell EMC 🟢"},
    {id:2, value:"Hewlett Packard Enterprise (HPE)", label:"HPE 🟢"},
    {id:3, value:"Lenovo", label:"Lenovo 🔵"},
    {id:4, value:"Cisco", label:"Cisco 🔵"},
    {id:5, value:"Supermicro", label:"Supermicro 🟣"},
    {id:6, value:"IBM", label:"IBM 🟠"},
    {id:7, value:"Oracle", label:"Oracle 🟡"},
];
/*
<Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />*/
export default function SecondStep() {
    const [selectOption, setSelectOption]=useState(null);
    const hobbiesSer= JSON.stringify(selectOption);
    localStorage.setItem("hobbies", hobbiesSer);
    const onChangeAdditionalHobbie = (e) =>{
        const sport = e.target.value;
        localStorage.setItem("additionalHobbie", sport);
    };
    return (
        <div>
            <h2>Seleccion</h2>
            <h4>Elige tu vendor favorito:</h4>
            <Container className="p-5 text-center">
                <Row className="justify-content-md-center">
                    <Col lg="7">
                        <h5>Vendor de servidores </h5>
                        <Select 
                            defaultValue={selectOption}
                            onChange={setSelectOption}
                            options={options}
                            isSearchable
                            isMulti
                        />
                    </Col>
                    <Col lg="7" className="mt-4">
                        <h5>Deseas otro vendor que no esta en esta lista , dinos cual: </h5>
                        <Form.Control
                            type="text"
                            placeholder="Huawei"
                            onChange={(e) => onChangeAdditionalHobbie(e)}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
