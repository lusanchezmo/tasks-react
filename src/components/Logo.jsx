import React from "react";
import '../styles/Logo.css';

function LogoTasks (props) {
    return(
        <div className='contenedor-logo-tareas'>
            <img 
                className='logo-tareas'
                src={require(`../images/${props.imagen}.png`)}
                width='200px'
                alt='logo de la aplicación de tareas' />
        </div>
    );
}

export default LogoTasks;