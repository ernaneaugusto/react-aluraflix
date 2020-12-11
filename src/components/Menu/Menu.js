import React from 'react';
import { Link } from "react-router-dom";
import Logo from './../../assets/images/aluraflix-logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink/ButtonLink';

const Menu = () => {
    return (
        <header className='Menu'>
            <Link to='/' title='Home Aluraflix'>
                <img src={Logo} className='Logo' alt='Logo Aluraflix' title='Aluraflix' />
            </Link>

            <ButtonLink text='Novo vídeo' to='/cadastro/video' className='ButtonLink' />
        </header>
    )
}

export default Menu;