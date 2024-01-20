import './App.css';
import EmergencyTable from './common/EmergencyTable/EmergencyTable';
import MatTypography from './common/MatTypography/MatTypography';
import HeaderBar from './components/HeaderBar/HeaderBar';


function App() {
  return (
    <div className='App'>
      <MatTypography text="Central de Emergencias" variant="h3" />
      <HeaderBar />
      <MatTypography text="Emergencias sin Asignar" variant="h4" />
      <EmergencyTable/>
    </div>
  );
}

export default App;
