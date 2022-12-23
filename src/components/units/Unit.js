import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findMachines, markMachine, unmarkMachine } from '../../apis/MachineAPI';
import { ReactComponent as GreenMachine } from '../../images/machine-green.svg';
import { ReactComponent as RedMachine } from '../../images/machine-red.svg';
import { setMachines } from '../../store/machine';
import Profile from '../profile/Profile';
import './Unit.scss';

const Unit = (props) => {

  const { openCatalog } = props;
  const { machines } = useSelector((state) => state.machinesStore);
  const { id } = useSelector((state) => state.authStore);
  const dispatch = useDispatch();

  const onMarkMachine = (machineId, status) => {
    console.log(machines, 'machines')
    if (status === 0) {
      markMachine({ machineId: machineId, userId: id});
    }
    onRefresh();
  }

  const onUnmarkMachine = (machineId, status) => {
    const payload = { machineId: machineId, userId: id}
    console.log(payload, 'payload')
    if (status === 1) {
      unmarkMachine(payload);
    }
    onRefresh();
  }

  const onRefresh = () => {
    findMachines().then((response) => {
      dispatch(setMachines(response));
    });
  }

  useEffect(() => {
    onRefresh();
  }, []);

  const isAvailable = (machine) => {
    return machine.bedId === '';
  };

  return (
    <div className='unit__container'>
      <Profile />
      <div className='unit__machines'>
        {machines.map((machine, index) => (
          <div className='unit__machine' key={index}>
            {isAvailable(machine) ? (
              <GreenMachine
                onClick={() => {
                  console.log('clicked', machine.machineId, machine.status)
                  onMarkMachine(machine.machineId, machine.status);
                }}
              />
            ) : (
              <RedMachine
                onClick={() => {
                  console.log('clicked', machine.machineId, machine.status)
                  onUnmarkMachine(machine.machineId, machine.status);
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
