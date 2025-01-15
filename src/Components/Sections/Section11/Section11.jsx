import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section11.css';
import img1 from '../../../assets/tactile.jpeg'
import bmwFilm from '../../../assets/bmwFilm.webp'
import offRoad from '../../../assets/offRoad.webp'

const Section11 = () => {
    return (
        <>
            <Container fluid>
                <Row className='section7Row'>

                    <Col className='sec7Row' xs={12} md={4}>
                        <Row >
                            <Col className="bmwExplained">
                                <img src={bmwFilm} width={"100%"} />
                                <div className="overlaySec7-text">
                                    <p className='title'>BMW film</p>
                                    <p className="subtitle-small">Freude stays forever</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className='artspedRightBorder'>
                            <Col className="ArtAndSpeed">
                                <img src={offRoad} width={"100%"} />
                                <div className="overlaySec7-text">
                                    <p className='title'>Rebelle Rally</p>
                                    <p className="subtitle-small">An off-road adventure in the BMW X2</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={8} className="germanProto">
                        <img src={img1} width={"100%"} />
                        <div className="overlay-text-left7">
                            <p className="title">Erlkonig -German prototype cars </p>
                            <p className="subtitle">The art of deception</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>

    );
};

export default Section11;
