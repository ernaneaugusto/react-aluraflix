import React from 'react';
import Logo from './../../assets/images/aluraflix-logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink/ButtonLink';

const Menu = () => {
    return (
        <header className='Menu'>
            <a href='/' title='Home Aluraflix'>
                <img src={Logo} className='Logo' alt='Logo Aluraflix' title='Aluraflix' />
            </a>

            <ButtonLink text='Novo vídeo' href='/' className='ButtonLink' />
        </header>
    )
}

export default Menu;