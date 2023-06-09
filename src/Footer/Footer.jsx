import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import {Context} from "../Context/Context";
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const upMenu = () =>{
        window.scrollTo(0, 0);
    }
    const upMap = () =>{
        window.scrollTo(0, 500);
    }
    let {sideBarOpen} = useContext(Context)
    const currentYear = new Date().getFullYear();
    return (
        <>
        <div className='d-flex pt-5 flex-column align-items-center footer'>
            <div className='col-5 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-2 imgFooterDiv'>
                <img src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1679510940/ici/logoicipng_zbsdom.png" className='img-fluid imgFooter' alt="" />
            </div>
            <div className="footer-info d-flex flex-column text-center align-items-center mt-5">
                <div className='col-8 col-sm-6 col-lg-4 col-xxl-3 mt-5'>
                    <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1680612964/ici/insti_v0n4zi.png" alt="" />
                </div>
                <Link onClick={upMap} to={'/ici/contacto'}>
                    <h4 className='direc fw-bold '>Dirección: Independencia 25, San Pedro</h4>
                </Link>
            </div>
            <div className="container d-none flex-column d-md-flex pb-2">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item fw-bold" onClick={upMenu}><Link to={'/ici'} className="nav-link px-1 py-3 d-flex inicio">INICIO</Link></li>
                    <li className="nav-item fw-bold" onClick={upMenu}><Link to={'/ici/inscripcion'} className="nav-link d-flex px-1 py-3 inscripcion">INSCRIPCION</Link></li>
                    <li className="nav-item fw-bold" onClick={upMenu}><Link to={'/ici/contacto'} className="nav-link d-flex px-1 py-3 contacto">CONTACTO</Link></li>
                    <li className="nav-item fw-bold" onClick={upMenu}><Link to={'/ici/viajes'} className="nav-link d-flex px-1 py-3 viajes">VIAJES</Link></li>
                    <li className="nav-item fw-bold" onClick={upMenu}><Link to={'/ici/examenes'} className="nav-link d-flex px-1 py-3 examenes">EXAMENES</Link></li>
                    <li className="nav-item fw-bold" onClick={upMenu}><Link to={'/ici/cursos'} className="nav-link d-flex px-1 py-3 cursos">CURSOS</Link></li>
                </ul>
                <p className="text-center text-body-secondary fw-bold">© {currentYear} Todos los derechos reservados</p>
            </div>
            <div onClick={() => sideBarOpen() } >
                <div className='div-nav-link my-5 d-flex d-md-none menuMovileDiv'>
                    <button className='nav-link d-flex flex-row menuMovile p-4' >
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer