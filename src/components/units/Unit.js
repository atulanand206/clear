import { useState } from 'react';
import { host } from '../../apis/MachineAPI';
import { ReactComponent as GreenMachine } from '../../images/machine-green.svg';
import { ReactComponent as RedMachine } from '../../images/machine-red.svg';
import './Unit.scss';
const Unit = (props) => {
  const [machines, setMachines] = useState(props.machines);

  const markMachine = async (id, statu) => {
    const response = await fetch(`${host}/machines/mark`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        status: statu,
      }),
    });
    const status = response.status;
    switch (status) {
      case 200:
        const machines = await response.json();
        console.log(machines);
        setMachines(machines);
        break;
      default:
    }

    const newData = machines.map((oldData) => {
      if (oldData.id === id) {
        return { ...oldData, status: statu };
      }
      return oldData;
    });
    setMachines(newData);
  };

  return (
    <div className='container'>
      {machines.map((machine) => (
        <div>
          {!machine.status ? (
            <GreenMachine
              className='unit'
              onClick={() => {
                markMachine(machine.id, 1 - machine.status);
              }}
            />
          ) : (
            <RedMachine
              className='unit'
              onClick={() => {
                markMachine(machine.id, 1 - machine.status);
              }}
            />
          )}

          {!machine.status ? (
            <h2 className='label__green'> {machine.name}</h2>
          ) : (
            <h2 className='label__red'> {machine.name}</h2>
          )}
        </div>
      ))}
    </div>
  );
};

export default Unit;
