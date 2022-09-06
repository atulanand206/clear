import './App.css';
import { useEffect, useState } from 'react';
import { ReactComponent as GreenMachine } from '../src/images/machine-green.svg';
import { ReactComponent as RedMachine } from '../src/images/machine-red.svg';
import { findMachines } from './apis/MachineAPI';
import Unit from './components/units/Unit';


function App() {

  // const status = ['online', 'busy', 'offline'];

  const [machines, setMachines] = useState([
    { name: 'Striker', id: 1, status: 0 },
    { name: 'Maverick', id: 2, status: 0 },
    { name: 'Diamond', id: 3, status: 0 },
    { name: 'Highland', id: 4, status: 0 },
  ]);

  useEffect(() => {
    findMachines()
    .then((response) => {
      console.log(response);
      setMachines(response);
    });
  }, []);

  console.log(machines);

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
