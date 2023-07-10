import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';

const CardsViajes = () => {
    const [expanded0, setExpanded0] = useState(false);
    const handleExpand0 = () => {
        setExpanded0(!expanded0);
    };
    const [expanded1, setExpanded1] = useState(false);
    const handleExpand1 = () => {
        setExpanded1(!expanded1);
    };
    return (
        <div className='cardsExams container-fluid'>
            {/* CARD 0 */}
            <Card className= {expanded0 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>Informacion del Viaje</h3></Card.Title>
                        <h5>FECHAS -  INSCRIPCIÓN.</h5>
                </Card.Body>
                {expanded0 && (
                    <Card.Footer>
                        {/* <TableExams/> */}
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand0}>
                    {expanded0 ? 'Leer menos' : 'Leer mas...'}
                </Button>
            </Card>

            {/* CARD 1 */}
            <Card className= {expanded1 ? 'expanded-card cardExams m-4' : 'collapsed-card cardExams m-4'}>
                <Card.Body>
                    <Card.Title><h3>Costo Total</h3></Card.Title>
                    <h5>COSTO DEL VIAJE.</h5>
                </Card.Body>
                {expanded1 && (
                    <Card.Footer className="cardFooterLvls">
                        {/* <ExamsLevels/> */}
                    </Card.Footer>
                )}
                <Button className="btn2" variant="primary" onClick={handleExpand1}>
                    {expanded1 ? 'Leer menos' : 'Leer mas...'}
                </Button>
            </Card>
        </div>
    )
}

export default CardsViajes