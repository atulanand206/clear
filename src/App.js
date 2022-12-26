import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useBuilding } from './apis/BuildingAPI';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Unit from './components/units/Unit';
import { setBuildingName, setLayout } from './store/building';
import { setBuildingId, setView } from './store/configs';
import { toast } from 'react-toastify';

function App() {

  const Views = ['Login', 'Machine', 'Catalog', 'Signup']
  const { view } = useSelector((state) => state.configsStore);
  const { buildingName } = useSelector((state) => state.buildingStore);

  const { data, isLoading, isError } = useBuilding();

  const dispatch = useDispatch();

  const page = () => {
    switch (view) {
      case Views[0]:
        return <Login onLogin={onLogin} onSignup={onStartSignup}/>
      case Views[1]:
        return <Unit openCatalog={onCatalog} logout={onLogout}/>
      case Views[2]:
        return <Layout onClose={onClose} />
      case Views[3]:
        return <Signup onLogin={onStartLogin} onSignup={onSignup}/>
      default:
        return <Login onLogin={onLogin} />
    }
  }

  useEffect(() => {
    dispatch(setView(Views[0]));
  }, []);

  const onLogin = () => {
    if (isLoading || isError || data === undefined) {
      return;
    }
    toast('🦄 Wow so easy!');
    dispatch(setLayout(data.layout));
    dispatch(setBuildingName(data.buildingName));
    dispatch(setBuildingId({ buildingId: "b2b20223-bdab-4a73-b50b-ac35eac7cfd6" }))
    dispatch(setView(Views[1]));
  }

  const onStartLogin = () => {
    dispatch(setView(Views[0]));
  }

  const onStartSignup = () => {
    dispatch(setView(Views[3]));
  }

  const onSignup = () => {
  }

  const onLogout = () => {
    dispatch(setView(Views[0]));
  }

  const onCatalog = () => {
    dispatch(setView(Views[2]));
  }

  const onClose = () => {
    dispatch(setView(Views[1]));
  }

  return (
    <div className='App'>
      <header className='title'>Machines</header>
      <header className='subtitle'>{buildingName}</header>
      <main className='main'>{page()}</main>
    </div>
  );
}

export default App;
