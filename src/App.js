import './App.css';
import MatTypography from './common/MatTypography/MatTypography';
import HeaderBar from './components/HeaderBar/HeaderBar';


function App() {
  return (
    <div className='App'>
      <MatTypography text="Central de Emergencias" variant="h3" />
      <HeaderBar />
      <MatTypography text="Emergencias sin Asignar" variant="h4" />
    </div>
  );
}

export default App;
