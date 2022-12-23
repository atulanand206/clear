import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findBuildingLayout, useBuilding } from './apis/BuildingAPI';
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
  const { data, isLoading, isError } = useBuilding();

  const dispatch = useDispatch();

  const page = () => {
    switch (view) {
      case Views[0]:
        return <Login onLogin={onLogin} />
      case Views[1]:
        return <Unit machines={machines} openCatalog={onCatalog}/>
      case Views[2]:
        return <Layout onClose={onClose} />
      default:
        return <Login onLogin={onLogin} />
    }
  }

  useEffect(() => {
    dispatch(setView(Views[0]));
    findMachines().then((response) => {
      dispatch(setMachines(response));
    });
  }, []);

  const onLogin = () => {
    if (isLoading || isError || data === undefined) {
      return;
    }
    dispatch(setLayout(data.layout));
    dispatch(setView(Views[1]));
  }

  const onCatalog = () => {
    dispatch(setView(Views[2]));
  }

  const onClose = () => {
    dispatch(setView(Views[1]));
  }

  return (
    <div className='App'>
      <header className='title'>Scalerverse Machines</header>
      <main className='main'>{page()}</main>
    </div>
  );
}

export default App;
