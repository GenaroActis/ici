import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom'

const buttons = [
    <Button sx={{
        color: "white",
        borderColor: 'white',
        fontSize: 14,
        }} key="one"><Link className="nav-link" aria-current="page"  to={'/ici/inscripcion'}>Inscripcion</Link></Button>,
        <Button sx={{
            color: "white",
            borderColor: 'white',
            borderRadius: 2,
            fontSize: 14,
            }} key="two"><Link className="nav-link" aria-current="page"  to={'/ici'}>Inicio</Link></Button>,
    <Button sx={{
        color: "white",
        borderColor: 'white',
        borderRadius: 2,
        fontSize: 14,
        }} key="three"><Link className="nav-link" aria-current="page"  to={'/ici/contacto'}>Contacto</Link></Button>,
];

const Footer = () => {
    return (
        <>
        <Box
        sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#000289",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        }}
        >
        <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center">
                <div className='imgFooterDiv'>
                    <img src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679510940/ici/logoicipng_zbsdom.png" className='imgFooter' alt="" />
                </div>
                <Grid container direction="column" className='mb-1 pt-4' alignItems="center">
                    <Typography color="white"  variant="subtitle1" sx={{
                        fontFamily: 'exo'
                    }}>
                        Centro Oficial Anglia Exams
                    </Typography>
                </Grid>
                <ButtonGroup
                    orientation="horizontal"
                    aria-label="vertical button group"
                    sx={{
                        bgcolor: '#000289',
                        color: "white",
                        }}
                    >
                    {buttons}
                </ButtonGroup>
            </Grid>
        </Container>
    </Box>
        </>
    )
}

export default Footer