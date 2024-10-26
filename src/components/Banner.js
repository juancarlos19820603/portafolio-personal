// Importing necessary hooks and components from React and React Bootstrap
import { useState, useEffect } from "react"; // Importing useState and useEffect hooks for managing state and side effects
import { Container, Row, Col } from "react-bootstrap"; // Importing layout components from React Bootstrap for responsive design
import { ArrowRightCircle } from "react-bootstrap-icons"; // Importing an icon component for use in the button
import headerImg from "../assets/img/header-img.svg"; // Importing an image to be used in the component

// Declaring a functional component named Banner
export const Banner = () => {
    // State to keep track of the current index of the text loop
    const [loopNum, setLoopNum] = useState(0);
    // State to track whether the text is being deleted
    const [isDeleting, setIsDeleting] = useState(false);
    // Array of strings to rotate through
    const toRotate = ["Web Developer", "Web Designer", "UI|UX Designer"];
    // State to hold the currently displayed text
    const [text, setText] = useState('');
    // State to control the speed of text update (delta)
    const [delta, setDelta] = useState(300 - Math.random() * 1000);
    // Constant to define the period for which each text is displayed
    const period = 2000;

    // useEffect hook to manage side effects related to the text update
    useEffect(() => {
        // Setting up an interval to call the tick function at the defined delta
        let ticker = setInterval(() => {
            tick();
        }, delta);
        // Cleanup function to clear the interval when the component unmounts or text changes
        return () => { clearInterval(ticker); };
    }, [text]); // Dependency array to rerun effect when text changes

    // Function to update the text
    const tick = () => {
        // Calculate the current index in the toRotate array
        let i = loopNum % toRotate.length;
        // Get the full text to be displayed based on the current index
        let fullText = toRotate[i];
        // Determine the updated text based on whether it is deleting or adding characters
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        // Update the text state with the new text
        setText(updatedText);

        // Adjust the delta for typing speed based on whether text is being deleted
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2); // Speed up deletion
        }
        // Check if the full text has been displayed
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true); // Start deleting
            setDelta(period); // Set delta to the defined period
        } else if (isDeleting && updatedText === '') {
            // Reset when deletion is complete
            setIsDeleting(false); // Stop deleting
            setLoopNum(loopNum + 1); // Move to the next string in the rotation
            setDelta(500); // Reset delta for typing speed
        }
    };

    // JSX to render the Banner component
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portafolio</span> {/* Tagline text */}
                        <h1>{'Hi I\'m webcoded '}<span className="wrap">{text}</span></h1> {/* Main heading with dynamic text */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p> {/* Placeholder paragraph */}
                        <button onClick={() => console.log('connect')}>Let’s Connect<ArrowRightCircle size={25} /></button> {/* Button with icon for connection */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" /> {/* Image displayed on the right side */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
