import { Container, Row, Col, Nav, Tab, TabContainer, TabPane } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";


export const Projects = () => {
    const projects = [
        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg3
        },
        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startups",
            description: "Design & Development",
            imgUrl: projImg3
        }
    ];
    

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p> 
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey={"/home"}>
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third" >Tab Three</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Container>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index)=>{
                                        return (
                                            <p>{project.title}</p>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second"> Lorem Ipsum </Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum </Tab.Pane>

                       
                    </Tab.Container>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>

        </section>
    );
}