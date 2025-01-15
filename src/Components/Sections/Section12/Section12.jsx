import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img25Year from '../../../assets/theFutureBright.jpg'
import CreativeJoy from '../../../assets/creativeJoy.jpg'
import gameChanger from '../../../assets/superHeros.jpg'
import './Section12.css'


const Section12 = () => {
    return (
        <>
            <Container fluid>
                <Row >
                    <Col sm className='Year25 x5'>
                        <img width='100%' src={img25Year} alt="" />
                        <div className='year25Text'>
                            <p className="title">The future is bright</p>
                            <p className="subtitle">The pioneering light concept of the BMW Vision Neue Klasse</p>
                        </div>
                    </Col>
                    <Col sm className='Year25 x6'>
                        <img width='100%' src={gameChanger} alt="" />
                        <div className='year25Text'>
                            <p className="title">BMW and superheros</p>
                            <p className="subtitle">Freeing Gaia Podcast</p>
                        </div>
                    </Col>
                    <Col sm className='Year25 x7'>
                        <img width='100%' src={CreativeJoy} alt="" />
                        <div className='year25Text'>
                            <p className="title">Creative joy</p>
                            <p className="subtitle">Luxury redifiend</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section12
