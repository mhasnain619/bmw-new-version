import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section9.css';
import artCar from '../../../assets/artCar.webp'
import img2 from '../../../assets/artMeetAnivotion.jpg'
import futureLuxury from '../../../assets/futureLuxury.webp'

const Section9 = () => {
    return (
        <>
            <Container fluid>
                <Row className='section7Row'>
                    <Col xs={12} md={8} className="germanProto">
                        <img src={artCar} width={"100%"} />
                        <div className="overlay-text-left7">
                            <p className="title">BMW Art Car #20</p>
                            <p className="subtitle">Julie Mehretu - dynamics in form</p>
                        </div>
                    </Col>
                    <Col className='sec7Row' xs={12} md={4}>
                        <Row >
                            <Col className="bmwExplained">
                                <img src={img2} width={"100%"} />
                                <div className="overlaySec7-text">
                                    <p className="title">Art meets inovation</p>
                                    <p className="subtitle-small">The BMW i5 flow NOSTOKANA </p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='artspedRightBorder'>
                            <Col className="ArtAndSpeed">
                                <img src={futureLuxury} width={"100%"} />
                                <div className="overlaySec7-text">
                                    <p className="title">The future of luxury </p>
                                    <p className="subtitle-small">Digital art meets mobility</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </>

    );
};

export default Section9;
