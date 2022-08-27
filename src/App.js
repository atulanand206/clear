import './App.css';
import  { useState, useEffect }  from 'react';

export const host = `${process.env.REACT_APP_REST_SCHEME}://${process.env.REACT_APP_REST_HOST}${process.env.REACT_APP_SERVER_ENDPOINT_PREFIX}`

function App() {

  const findMachines = async () => {
    const response = await fetch(`${host}/machines`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const status = response.status;
    switch (status) {
      case 200:
        const machines = await response.json();
        console.log(machines)
        setMachines(machines);
        break;
      default: ;
    }
  }

  const markMachine = async (id, statu) => {
    const response = await fetch(`${host}/machines/mark`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        status: statu
      })
    })
    const status = response.status;
    switch (status) {
      case 200:
        const machines = await response.json();
        console.log(machines)
        setMachines(machines);
        break;
      default: ;
    }
  }

  function handlePick(status){
    switch (status) {
      case 'online': return  'entity entity-online' ;
      case 'offline': return  'entity entity-offline' ;
      case 'busy': return  'entity entity-busy' ;
      default: return 'entity';
    }
  }

  function classText(status){
    switch (status) {
      case 'online': return  'text text-online' ;
      case 'offline': return  'text text-offline' ;
      case 'busy': return  'text text-busy' ;
      default: return 'text';
    }
  }
  
  const status = ['online', 'busy', 'offline'];

  const [machines, setMachines] = useState([])

  useEffect(() => {
    findMachines();
  } , []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Scalerverse Machines</h1>
        <div className='container'>{machines.map(machine => {
          return (
            <div id={machine.id} onClick={() => {
              markMachine(machine.id, 1 - machine.status);
            }}>
              <div className={handlePick(status[machine.status])}></div>
              <h2 className={classText(status[machine.status])} >{machine.name}</h2>
            </div>
          );
        })}</div>
      </header>
    </div>
  );
}

export default App;
