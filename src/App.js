import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findMachines } from './apis/MachineAPI';
import Unit from './components/units/Unit';
import { setMachines } from './store/machine';
import { findBuildingLayout } from './apis/BuildingAPI';
import { setLayout } from './store/building';
import Layout from './components/layout/Layout';

import buildingResponse from './responses/building.json'
import machineResponse from './responses/machine.json'


function App() {
  const { machines } = useSelector((state) => state.machinesStore);
  const { building } = useSelector((state) => state.buildingStore);

  const dispatch = useDispatch();

  const buildingId = "b2b20223-bdab-4a73-b50b-ac35eac7cfd6";

  useEffect(() => {
    // findMachines().then((response) => {
      dispatch(setMachines(machineResponse));
    // });
    // findBuildingLayout(buildingId).then((response) => {
      // const levels = (response.layout);
      // console.log(levels,'levels')
      dispatch(setLayout(buildingResponse.layout));
    // }, [building]);
  });

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
    </div>
  );
}

export default App;
