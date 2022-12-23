import { ReactComponent as GreenMachine } from '../../images/machine-green.svg';
import { ReactComponent as RedMachine } from '../../images/machine-red.svg';
import Profile from '../profile/Profile';
import './Unit.scss';
const Unit = (props) => {

  const { openCatalog } = props;

  return (
    <div className='unit__container'>
      <Profile />
      <div className='unit__machines'>
        {props.machines.map((machine) => (
          <div className='unit__machine'>
            {!machine.status ? (
              <GreenMachine
                onClick={() => {
                  // markMachine(machine.id, 1 - machine.status);
                }}
              />
            ) : (
              <RedMachine
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
      <div className='catalog__open' onClick={openCatalog} >Open Catalog</div>
    </div>
  );
};

export default Unit;
