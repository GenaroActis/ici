import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';
import TableExams from './TableExams.jsx'
import ExamsLevels from "./ExamsLevels.jsx";

const CardsExams = () => {
    const [expanded0, setExpanded0] = useState(false);
    const handleExpand0 = () => {
        setExpanded0(!expanded0);
    };
    const [expanded1, setExpanded1] = useState(false);
    const handleExpand1 = () => {
        setExpanded1(!expanded1);
    };
    const [expanded2, setExpanded2] = useState(false);
    const handleExpand2 = () => {
        setExpanded2(!expanded2);
    };
    return (
        <div className='cardsExams'>
            {/* CARD 0 */}
            <Card className= {expanded0 ? 'expanded-card cardExams' : 'collapsed-card cardExams'}>
                <Card.Body>
                    <Card.Title><h3>Fechas de incripción y examen</h3></Card.Title>
                        <h5>INFORMACIÓN ADMINISTRATIVA - EXÁMENES EN PAPEL.</h5>
                </Card.Body>
                {expanded0 && (
                    <Card.Footer>
                        <TableExams/>
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand0}>
                    {expanded0 ? 'Leer menos' : 'Leer mas...'}
                </Button>
            </Card>

            {/* CARD 1 */}
            <Card className= {expanded1 ? 'expanded-card cardExams' : 'collapsed-card cardExams'}>
                <Card.Body>
                    <Card.Title><h3>Modelos de Examen & Teacher Handbook</h3></Card.Title>
                        <h5>Trabajos de práctica y más.</h5>
                </Card.Body>
                {expanded1 && (
                    <Card.Footer>
                        
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand1}>
                    {expanded1 ? 'Leer menos' : 'Leer mas...'}
                </Button>
            </Card>

            {/* CARD 2 */}
            <Card className= {expanded2 ? 'expanded-card cardExams' : 'collapsed-card cardExams'}>
                <Card.Body>
                    <Card.Title><h3>Niveles de Examen</h3></Card.Title>
                </Card.Body>
                {expanded2 && (
                    <Card.Footer className="cardFooterLvls">
                        <ExamsLevels/>
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand2}>
                    {expanded2 ? 'Leer menos' : 'Leer mas...'}
                </Button>
            </Card>
        </div>
    )
}

export default CardsExams 