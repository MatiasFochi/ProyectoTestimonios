import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros antiguos alumnos sobre freeCodeCamp:</h1>
      <Testimonio
        nombre = 'Shawn Wang'
        pais = 'Singapur'
        imagen = 'shawn'
        cargo = 'Ingeniero de Software'
        empresa = 'Amazon'
        testimonio = 'Da miedo cambiar de carrera. Solo gané confianza en que podía codificar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Al cabo de un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'
        frase = 'freeCodeCamp cambió mi vida'
        alt='foto de Shawn'
      />
      <Testimonio
        nombre = 'Sarah Chima'
        pais = 'Nigeria'
        imagen = 'shara'
        cargo = 'Ingeniero de Software'
        empresa = ' ChatDesk'
        testimonio = 'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de codificación desde un nivel de principiante total hasta un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo como desarrollador en una empresa increíble'
        frase = 'freeCodeCamp fue la puerta de entrada a mi carrera'
        alt = 'foto de Shara'
      />
      <Testimonio 
        nombre = 'Emma Bostian'
        pais = 'Suecia'
        imagen = 'emma'
        cargo = 'Ingeniero de Software'
        empresa = 'Spotify'
        testimonio = 'Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify'
        frase = 'freeCodeCamp me dio las habilidades y la confianza'
        alt = 'foto de Emma'
      />
     <Testimonio 
      nombre = 'Fanny Vizcaino Corsetti'
      pais = 'Argentina'
      imagen = 'fanny'
      cargo = 'DataBase Administrator'
      empresa = 'Naldo'
      testimonio = 'Hago de todo ademas de bases de datos. Reniego con mis compañeros que son medio inutiles y me llaman cuando no saben como se solucionan los problemas. Trabajo con SQL Server.'
      frase = 'Hago de todo'
      alt = 'foto de Fanny'
     /> 
      </div>
    </div>
  );
}

export default App;
