import React from 'react';

function ButtonLink (props) {
    return (
        <a href={props.link} className={props.className}>
            {props.text || 'Novo vídeo'}
        </a>
    )
}

export default ButtonLink;