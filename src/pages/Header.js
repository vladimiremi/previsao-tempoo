import React from 'react';
import Input from './Input';
import CardInformation from './CardInformation';

export default function Reader({}){

    return(
        <header className="App-header">
            <h1>Previsão do Tempo</h1>
            <Input /><CardInformation />
            
            <hr/>
        </header>
    )
}