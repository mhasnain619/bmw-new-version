import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bmwVision from '../../../assets/bmwVision.webp'
import exceptNo from '../../../assets/acceptNolimit.webp'
import attetentionTo from '../../../assets/attentionToDetail.jpg'
import './Section10.css'


const Section10 = () => {
    return (
        <>
            <Container fluid>
                <Row >
                    <Col sm className='Year25 x5'>
                        <img width='100%' src={bmwVision} alt="" />
                        <div className='year25Text'>
                            <p className="title">BMW Vision Neue Klasse X</p>
                            <p className="subtitle">Welcome to the Neue Klasse Family from BMW</p>
                        </div>
                    </Col>
                    <Col sm className='Year25 x6'>
                        <img width='100%' src={attetentionTo} alt="" />
                        <div className='year25Text'>
                            <p className="title">BMW MxLEGO</p>
                            <p className="subtitle">Attention to detail comes in a double pack</p>
                        </div>
                    </Col>
                    <Col sm className='Year25 x7'>
                        <img width='100%' src={exceptNo} alt="" />
                        <div className='year25Text'>
                            <p className="title">Accept no lmitations</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section10
