import { Card, Col } from "react-bootstrap";
export default function CardFruit({fruit, clickCard, selectedCard}) {
    const {id, icon, name, description} = fruit;

    return (
        <Col
        className={`card-fruit mt-2 ${selectedCard === fruit.id ? "selected-card": ""}`}
        onClick={() => clickCard(fruit)}
        key={id}>
            <Card>
                <Card.Body>
                    <Card.Title><img src={icon} /></Card.Title>
                    <Card.Subtitle style={{fontWeight: "bold"}}><strgon>{name}</strgon></Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}
