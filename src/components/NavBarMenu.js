import { Container, Navbar } from "react-bootstrap";

export default function NavBarMenu() {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#!">
                        Servicios de <b>TI</b>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: {" "}
                            <a href="https://www.linkedin.com/in/santiago-jose-narvaez-vidal-a0230119b" target="_blank" rel="noreferrer"> Santiago Narvaez</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
