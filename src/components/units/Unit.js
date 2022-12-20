import { ReactComponent as GreenMachine } from '../../images/machine-green.svg';
import { ReactComponent as RedMachine } from '../../images/machine-red.svg';
import './Unit.scss';
const Unit = (props) => {

  return (
    <div className='container'>
      {props.machines.map((machine) => (
        <div>
          {!machine.status ? (
            <GreenMachine
              className='unit'
              onClick={() => {
                // markMachine(machine.id, 1 - machine.status);
              }}
            />
          ) : (
            <RedMachine
              className='unit'
              onClick={() => {
                // markMachine(machine.id, 1 - machine.status);
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
