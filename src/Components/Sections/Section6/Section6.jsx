import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img25Year from '../../../assets/25Year.webp'
import hydrogen from '../../../assets/hydrogen.webp'
import gameChanger from '../../../assets/offRoad.webp'
import './Section6.css'


const Section6 = () => {
    return (
        <>
            <Container fluid>
                <Row style={{ borderTop: '2px solid white' }}>
                    <Col sm className='Year25 x5'>
                        <img width='100%' src={img25Year} alt="" />
                        <div className='year25Text'>
                            <p className="title">25-year anniversary</p>
                            <p className="subtitle">The BMW X5 through the ages</p>
                        </div>
                    </Col>
                    <Col sm className='Year25 x6'>
                        <img width='100%' src={gameChanger} alt="" />
                        <div className='year25Text'>
                            <p className="title">Game Changer</p>
                            <p className="subtitle">An audio series about those who change the world around them</p>
                        </div>

                    </Col>
                    <Col sm className='Year25 x7'>
                        <img width='100%' src={hydrogen} alt="" />
                        <div className='year25Text'>
                            <p className="title">Hudrogen</p>
                            <p className="subtitle">The BMW journey to the mobility of the future</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section6
