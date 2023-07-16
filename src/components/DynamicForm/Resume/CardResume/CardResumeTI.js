import { Card } from "react-bootstrap";
import "./CardResume";
export default function CardResumeTI(props) {
    const {subtitle, TIStorage, text}=props;

    return (
        <div>
            <Card className="text-center p-2 card-resume">
                <Card.Body>
                    <Card.Subtitle>
                        <b>{subtitle}</b>
                    </Card.Subtitle>
                    <ul>
                        {TIStorage.map((hobbie, index)=>(
                            <li key={index}>{hobbie.label}</li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
            {text &&(
                <Card className="text-center p-2 card-resume">
                    <Card.Body>
                        <Card.Subtitle>
                            <b>Servicios Adicionales: </b>
                        </Card.Subtitle>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}