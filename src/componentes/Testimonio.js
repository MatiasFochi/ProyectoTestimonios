//import React from 'react'; En versiones actuales no requiere importar React explicitamente
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
  // Dividir el testimonio en tres partes desde el comienzo del testimonio hasta el indexado
  //de la primer aparicion de la frase, luego desde el comienzo de la frase hasta el final
  //de la misma, y por ultimo desde el final de la frase hasta el fin del testimonio.
  let inicio = props.testimonio.substring(0, props.testimonio.indexOf(props.frase));
  let frase = props.testimonio.substring(props.testimonio.indexOf(props.frase), props.testimonio.indexOf(props.frase) + props.frase.length);
  let fin = props.testimonio.substring(props.testimonio.indexOf(props.frase) + props.frase.length);
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt= {props.alt}/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <p className='texto-testimonio'>"{inicio}<strong>{frase}</strong>{fin}".</p>
        </div>
    </div>
  );
}

export default Testimonio;