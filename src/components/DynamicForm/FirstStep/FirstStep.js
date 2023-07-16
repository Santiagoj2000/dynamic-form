import "./FirstStep.css";
import CardFruit from "./CardFruit";
import { Container, Row } from "react-bootstrap";
import { useState} from "react";
import  iconoLinux  from "../../../assets/iconos/linux.ico";
import  iconoWindows  from "../../../assets/iconos/windows.png";
import  iconoUnix from "../../../assets/iconos/Unix.png";
import  iconoIbm from "../../../assets/iconos/aix.png";
import  iconoVMware from "../../../assets/iconos/vmware_1.png";
import  iconoFreeBSD from "../../../assets/iconos/freedbs.png";

export const fruits = [
    {
        id:1,
        icon: iconoLinux,
        name: "Linux",
        description:"conocido por su estabilidad, seguridad y flexibilidad",
    },
    {
        id:2,
        icon: iconoWindows,
        name: "Windows Server",
        description:"proporciona características y servicios, como Active Directory y mucho mas.",
    },
    {
        id:3,
        icon: iconoUnix,
        name:"Unix",
        description:"se utiliza ampliamente en servidores de alto rendimiento y aplicaciones críticas",
    },
    {
        id:4,
        icon: iconoIbm,
        name: "IBM z/OS",
        description:"conocido por su robustez, seguridad y capacidad de procesamiento masivo.",
    },
    {
        id:5,
        icon:iconoVMware,
        name: "VMware ESXi",
        description:"proporciona una plataforma para virtualizar y ejecutar múltiples sistemas operativos en un servidor físico",
    },
    {
        id:6,
        icon: iconoFreeBSD,
        name:"FreeBSD",
        description:"se utiliza ampliamente en servidores web, firewalls, enrutadores y otros dispositivos de red",
    },
];

export default function FirstStep() {
    const [selectedCard, setSelectedCard] = useState(null);

    const clickCard = (fruit) =>{
        setSelectedCard(fruit.id);
        localStorage.setItem("fruitName", fruit.name);
        localStorage.setItem("iconFruit", fruit.id);
    };


    return(
        <div>
            <h2>Elige tu sistema operativo preferido:</h2>
            <h4>Selecciona una opcion y luego presiona el boton "Next Step"</h4>
            <Container className="p-5 text-center">
                <Row>
                    {fruits.map ((fruit, index)=>(
                        <CardFruit
                            fruit={fruit}
                            key={index}
                            clickCard={clickCard}
                            selectedCard={selectedCard}
                        />
                    ))}
                </Row>                
            </Container>
        </div>
    );
    
}
