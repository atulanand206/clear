import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findMachines } from './apis/MachineAPI';
import Unit from './components/units/Unit';
import { setMachines } from './store/machine';


function App() {
  const {machines} = useSelector((state) => state.machinesStore);

  const dispatch = useDispatch();

  useEffect(() => {
    findMachines().then((response) => {
      dispatch(setMachines(response));
    });
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
      <Unit machines={machines} />
    </div>
  );
}

export default App;
