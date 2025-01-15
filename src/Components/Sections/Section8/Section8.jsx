import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bmwWelt from '../../../assets/bmwWelt.webp'
import concept from '../../../assets/conceptSkytop.jpg'
import wildArt from '../../../assets/wildatArt.jpg'
import './Section8.css'


const Section8 = () => {
    return (
        <>
            <Container fluid>
                <Row >
                    <Col sm className='Year25 x5'>
                        <img width='100%' src={bmwWelt} alt="" />
                        <div className='year25Text'>
                            <p className="titlepo">BMW Welt, BMW Museum, and BMW M Driving Acedmy</p>
                            <p className="subtitlepo">BMW Munich Experiance</p>
                        </div>
                    </Col>
                    <Col sm className='Year25 x6'>
                        <img width='100%' src={wildArt} alt="" />
                        <div className='year25Text'>
                            <p className="title">Wild at Art</p>
                            <p className="subtitle">The history of BMW Art Cars</p>
                        </div>
                    </Col>
                    <Col sm className='Year25 x7'>
                        <img width='100%' src={concept} alt="" />
                        <div className='year25Text'>
                            <p className="title">BMW Concept Skytop</p>
                            <p className="subtitle">The fusion of tradition and modernity</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Section8
