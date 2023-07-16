import { Button, CardGroup, Modal } from "react-bootstrap";
import CardResume from "./CardResume/CardResume";
import CardResumeHobbies from "./CardResume/CardResumeHobbies";
import CardResumeTI from "./CardResume/CardResumeTI";
import { fruits } from "../FirstStep/FirstStep";


export default function Resume({showModal, setModal, setStep}) {
    const favouriteFruit= localStorage.getItem('fruitName');
    const fruitIcon= JSON.parse(localStorage.getItem('iconFruit'));

    const hobbiesStorage=JSON.parse(localStorage.getItem('hobbies'));
    const TIStorage=JSON.parse(localStorage.getItem('TI'));

    const addiotionalHobbie = localStorage.getItem('additionalHobbie');
    const addiotionalTI = localStorage.getItem('additionalTI');

    const comment = localStorage.getItem('comment');

    const clearForm = () =>{
        localStorage.clear();
        setModal(false);
        setStep(1);
    };

    const valor = fruits.map ((e) => {
        if (e.id === fruitIcon) {
            return (
              <img key={e.id} src={e.icon} alt={e.name} />
            );
        }
    }

    )
    console.log(favouriteFruit);
    
    return(
        <Modal
            show={showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={clearForm}
        >
            <Modal.Header closeButton>
                <Modal.Title>Congratulations !🥳 🎉</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Este es tu resumen personalizado</h4>
                <CardGroup className="mt-4">
                    {favouriteFruit && fruitIcon &&(
                        <CardResume 
                            title= {valor}
                            subtitle="Tu Sistema favorito es: "
                            text= <strong>{favouriteFruit}</strong>
                        />
                    )}
                    {hobbiesStorage &&(
                        <CardResumeHobbies 
                            subtitle="Tus vendor de preferencia:"
                            text={addiotionalHobbie}
                            hobbiesStorage={hobbiesStorage}
                        />
                    )}
                    {comment && (
                        <CardResume
                            subtitle="Proposito:"
                            text={comment}
                        />
                    )}
                    {TIStorage && (
                        <CardResumeTI
                            subtitle="Servicios de TI"
                            text={addiotionalTI}
                            TIStorage={TIStorage}
                        />
                    )}
                </CardGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={clearForm} variant="outline-dark">
                    Exit and clear form
                </Button>
            </Modal.Footer>
        </Modal>
    );

}
