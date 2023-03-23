import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
    );

const Contacto = () => {
    return (
        <>
        <div id='contacto'>
            <Card align="center" sx={{ minWidth: 275, fontFamily: 'Exo', mt:7, boxShadow: 3 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20,  fontFamily: 'Exo' }} color="text.secondary" gutterBottom>
                    I.C.I. Patricia Alemis 
                    </Typography>
                    <Typography sx={{ fontFamily: 'Exo'}} variant="h5" component="div">
                    texto descriptivo del insti
                    </Typography>
                    <Typography sx={{ mb: 1.5,  fontFamily: 'Exo' }} color="text.secondary">
                    Centro Oficial Anglia Exams
                    </Typography>
                    <Typography sx={{ fontFamily: 'Exo'}} variant="body2">
                    Indepencia 25, San Pedro (Buenos Aires)
                    <br />
                    </Typography>
                </CardContent>
            </Card>
            <div id='whatsapp'>
                <h2>+54 3329 474259</h2>
                <a href="https://wa.me/+543329474259?text=Hola,%20te%20quería%20consultar%20sobre..." class="whatsapp"  aria-current="page"  target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
            </div>
            <div className='iframe'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.9953177457774!2d-59.67163998421185!3d-33.683185416881635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba22da169d1a37%3A0x43eed8eb7ff026e2!2sIndependencia%2025%2C%20San%20Pedro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1679587879376!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id='divAnglia'>
            <img className='imgAnglia' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679514874/ici/Anglia_Logo_2015_No_background_1_2_tlnnnf.png" alt="" />
                <Card align="starter" sx={{ minWidth: 120, fontFamily: 'Exo', mb:7}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 20,  fontFamily: 'arial' }} color="#0082C0" gutterBottom>
                        I.C.I. PATRICIA ALEMIS
                        </Typography>
                        <Typography sx={{fontSize:17, mb: 1.5,  fontFamily: 'arial' }} color="#0082C0">
                        Centro Oficial Anglia Exams
                        </Typography>
                        <Typography sx={{ fontSize:15, fontFamily: 'arial'}} color="#C90A1D" variant="body2">
                        Exámenes Internacionales
                        <br />
                        </Typography>
                    </CardContent>
                </Card>
                
            </div>
        </div>
        </>
    )
}

export default Contacto