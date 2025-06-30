import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioCitas from './components/FormularioCitas';

function App() {

  return (
    <>
    <main className='py-4 fondoRosaClaro'>
      <h1>Administrador pacientes de veterinaria</h1>
      <FormularioCitas></FormularioCitas>
    </main>
    <footer className="fondoRosaOscuro text-center py-3">
        <p>&copy; Todos los derechos reservados - Claudia Ximena Barrientos</p>
      </footer>
    </>
  )
}

export default App
