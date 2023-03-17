import React from 'react';
import './header.css';

export default function Header(){
    return(
        <div className='header'>
            <p className='nome'>ACME</p>
            <p className='texto'>Climatempo</p>
        </div>
    );
}