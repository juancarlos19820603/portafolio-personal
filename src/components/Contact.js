import { useState } from "react"
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact =()=>{

    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate=(category, value)=>{
      setFormDetails({
        ...formDetails,
        [category]: value
      })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        setTimeout(() => {
            setButtonText("Send");
            setFormDetails(formInitialDetails);
            setStatus({ success: true, message: 'Message sent successfully (simulated)' });
        }, 2000); // Simula un retraso de 2 segundos
    };
    

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="email" value={formDetails.email} placeholder="Email Adress" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col>
                              <textarea row="6" value={formDetails.messagge} placeholder="Messagge"  onChange={(e) => onFormUpdate('messagge', e.target.value)}/>
                                <button type='submit'>{buttonText}</button>
                            </Col>
                            {
                                status.messagge &&
                                <Col>
                                    <p className={status.succes === false? "danger":"succes"}>{status.messagge}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}