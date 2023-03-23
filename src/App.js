import './App.css';
import ListaTareas from './components/ListaTareas';
import LogoTasks from './components/Logo';

function App() {
  return (
    <div className="App">
      <LogoTasks imagen='logo'/>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
