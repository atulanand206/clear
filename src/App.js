import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findMachines } from './apis/MachineAPI';
import Unit from './components/units/Unit';
import Login from './components/login/Login';
import { setMachines } from './store/machine';
import { findBuildingLayout } from './apis/BuildingAPI';
import { setLayout } from './store/building';
import { setView } from './store/configs';
import Layout from './components/layout/Layout';

import buildingResponse from './responses/building.json'
import machineResponse from './responses/machine.json'


function App() {

  const Views = ['Login', 'Machine', 'Catalog']
  const { view } = useSelector((state) => state.configsStore);

  const { machines } = useSelector((state) => state.machinesStore);
  const { building } = useSelector((state) => state.buildingStore);

  const dispatch = useDispatch();

  const buildingId = "b2b20223-bdab-4a73-b50b-ac35eac7cfd6";

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
      console.log(levels,'levels')
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
      }}
    >
      <header className='title'>Scalerverse Machines</header>
      {/* <Unit machines={machines} /> */}
      <Layout />
      {view === Views[0] && <Login onLogin={onLogin} />}
    </div>
  );
}

export default App;
