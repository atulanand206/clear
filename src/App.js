import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findBuildingLayout } from './apis/BuildingAPI';
import { findMachines } from './apis/MachineAPI';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Unit from './components/units/Unit';
import buildingResponse from './responses/building.json'
import machineResponse from './responses/machine.json'
import { setLayout } from './store/building';
import { setView } from './store/configs';
import { setMachines } from './store/machine';

function App() {

  const Views = ['Login', 'Machine', 'Catalog']
  const { view } = useSelector((state) => state.configsStore);

  const { machines } = useSelector((state) => state.machinesStore);
  const { building } = useSelector((state) => state.buildingStore);

  const dispatch = useDispatch();

  const buildingId = "b2b20223-bdab-4a73-b50b-ac35eac7cfd6";

  const page = () => {
    console.log('finding page', view)
    switch (view) {
      case Views[0]:
        return <Login onLogin={onLogin} />
      case Views[1]:
        return <Unit machines={machines} />
      case Views[2]:
        return <Layout />
      default:
        return <Login onLogin={onLogin} />
    }
  }
  useEffect(() => {
    dispatch(setView(Views[0]));
    console.log(view, 'view', view === Views[0])
    findMachines().then((response) => {
      console.log(response, 'machines')
      dispatch(setMachines(response));
    });
  }, []);

  const onLogin = () => {
    findBuildingLayout(buildingId).then((response) => {
      const levels = (response.layout);
      console.log(levels, 'levels')
      dispatch(setLayout(levels));
      dispatch(setView(Views[1]));
    }, [building]);
  }

  return (
    <div
      className='App'
      style={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
      <header className='title'>Scalerverse Machines</header>
      <main className='main'>{page()}</main>
    </div>
  );
}

export default App;
