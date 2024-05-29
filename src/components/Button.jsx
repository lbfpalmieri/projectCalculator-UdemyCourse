/* Esta sintaxe estranha de tags não é uma string, nem HTML. É chamada JSX e é uma extensão de sintaxe para JavaScript. */
import React from "react";
import './Button.css';

/* Componentes dão menos bugs e menos problemas quando nao possui estado. */

/* Declarando uma função arrow */
export default props =>
    /* Expressão chaves dentro de um JSX é template string e pode ter código java script*/
    <button 
        onClick={e => props.click(props.label)}
        className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
    </button>