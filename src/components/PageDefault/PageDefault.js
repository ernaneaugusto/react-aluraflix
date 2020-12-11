import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer';
import './PageDefault.css';

const PageDefault = (props) => {

    return (
        <React.Fragment>
            <Menu />
            <main className='Main'>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default PageDefault;