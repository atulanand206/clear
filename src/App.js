import './App.css';
import { useState } from 'react';
import { ReactComponent as GreenMachine } from '../src/images/machine-green.svg';
import { ReactComponent as RedMachine } from '../src/images/machine-red.svg';

export const host = `${process.env.REACT_APP_REST_SCHEME}://${process.env.REACT_APP_REST_HOST}${process.env.REACT_APP_SERVER_ENDPOINT_PREFIX}`;

function App() {
  // const findMachines = async () => {
  //   const response = await fetch(`${host}/machines`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const status = response.status;
  //   switch (status) {
  //     case 200:
  //       const machines = await response.json();
  //       console.log(machines);
  //       setMachines(machines);
  //       break;
  //     default:
  //   }
  // };

  const markMachine = async (id, statu) => {
    // const response = await fetch(`${host}/machines/mark`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     id: id,
    //     status: statu,
    //   }),
    // });
    // const status = response.status;
    // switch (status) {
    //   case 200:
    //     const machines = await response.json();
    //     console.log(machines);
    //     setMachines(machines);
    //     break;
    //   default:
    // }

    const newData = machines.map((oldData) => {
      if (oldData.id === id) {
        return { ...oldData, status: statu };
      }
      return oldData;
    });
    setMachines(newData);
  };

  // function handlePick(status) {
  //   switch (status) {
  //     case 'online':
  //       return 'entity entity-online';
  //     case 'offline':
  //       return 'entity entity-offline';
  //     case 'busy':
  //       return 'entity entity-busy';
  //     default:
  //       return 'entity';
  //   }
  // }

  // function classText(status) {
  //   switch (status) {
  //     case 'online':
  //       return 'text text-online';
  //     case 'offline':
  //       return 'text text-offline';
  //     case 'busy':
  //       return 'text text-busy';
  //     default:
  //       return 'text';
  //   }
  // }

  // const status = ['online', 'busy', 'offline'];

  const [machines, setMachines] = useState([
    { name: 'Striker', id: 1, status: 0 },
    { name: 'Maverick', id: 2, status: 0 },
    { name: 'Diamond', id: 3, status: 0 },
    { name: 'Highland', id: 4, status: 0 },
  ]);

  // useEffect(() => {
  //   // findMachines();
  // }, []);

  console.log(machines);

  return (
    <div
      className='App'
      style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <header>
        <h1 className='title'>Scalerverse Machines</h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            flexWrap: 'wrap',
            margin: 'auto',
            justifyContent: 'center',
          }}
        >
          {machines.map((machine) => (
            <div>
              {!machine.status ? (
                <GreenMachine
                  style={{ height: '250px' }}
                  onClick={() => {
                    markMachine(machine.id, 1 - machine.status);
                  }}
                />
              ) : (
                <RedMachine
                  style={{ height: '250px' }}
                  onClick={() => {
                    markMachine(machine.id, 1 - machine.status);
                  }}
                />
              )}

              {!machine.status ? (
                <h2 style={{ color: '#23cc11' }}> {machine.name}</h2>
              ) : (
                <h2 style={{ color: '#CC0E0E' }}> {machine.name}</h2>
              )}
            </div>
          ))}
        </div>
        {/* <div className='container'>
          {machines.map((machine) => {
            return (
              <div
                id={machine.id}
                onClick={() => {
                  markMachine(machine.id, 1 - machine.status);
                }}
              >
                <div className={handlePick(status[machine.status])}></div>
                <h2 className={classText(status[machine.status])}>
                  {machine.name}
                </h2>
              </div>
            );
          })}
          {/* {machines.map((machine) => {
            return (
              <div>
                <img
                  src={GreenMachine}
                  onClick={() => {
                    markMachine(machine.id, 1 - machine.status);
                  }}
                  alt='machine-logo'
                />
              </div>
            );
          })} 
        </div> */}
      </header>
    </div>
  );
}

export default App;
