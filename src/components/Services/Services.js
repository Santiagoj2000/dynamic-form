import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import img_servidor from "../../assets/img/Datacenter.jpg";
import img_software from "../../assets/img/Software.jpeg";
import img_nube from "../../assets/img/Nube.jpg";
import CardService from "./CardService/CardService";

export default function Services() {
    const servicesArray = [
        {
            title: "Servicios de infraestructura",
            subtitle: "diseño, implementación y gestión de infraestructura tecnológica",
            image: img_servidor,
            footer: "Estoy intereaso ➡️",
            link: "https://garatucloud.com/tecnologia-informatica-infraestructura-ti-redes-virtualizacion/",
        },
        {
            title: "Soluciones de software",
            subtitle: "Sistemas operativos, bases de datos, software de gestión empresarial (ERP)",
            image: img_software,
            footer: "Estoy intereaso ➡️",
            link: "https://www.bluestarinc.com/la-es/soluciones/soluciones-de-software.html",
        },
        {
            title: "Servicios en la nube",
            subtitle: "Infraestructura como servicio (IaaS), plataforma como servicio (PaaS)",
            image: img_nube,
            footer: "Estoy intereaso ➡️",
            link: "https://www.redhat.com/es/topics/cloud-computing/what-are-cloud-services",
        },
    ];

    return (
        <div className="services p-4 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Servicios Tecnologícos</h2>
                        <h4 className="pb-3 text-center">
                            Soluciones integrales para impulsar la productividad y la eficiencia de las empresas en la era digital.
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
