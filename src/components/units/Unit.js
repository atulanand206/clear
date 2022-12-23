import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findMachines, markMachine, unmarkMachine } from '../../apis/MachineAPI';
import { ReactComponent as GreenMachine } from '../../images/machine-green.svg';
import { ReactComponent as RedMachine } from '../../images/machine-red.svg';
import { setMachines } from '../../store/machine';
import Profile from '../profile/Profile';
import { getUserIdFromBedId } from '../../urls/BuildingUtils';
import './Unit.scss';
import BedUserRead from '../beduserread/BedUserRead';

const Unit = (props) => {

  const { openCatalog } = props;
  const { machines } = useSelector((state) => state.machinesStore);
  const { levels } = useSelector((state) => state.buildingStore);
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
                  onMarkMachine(machine.machineId, machine.status);
                }}
              />
            ) : (
                <RedMachine
                  onClick={() => {
                    onUnmarkMachine(machine.machineId, machine.status);
                  }}
                />
            )}
            {!machine.status ? (
              <h2 className='label__green'> {machine.name}</h2>
            ) : (
              <div >
                <h2 className='label__red'> {machine.name}</h2>
                <BedUserRead userId={getUserIdFromBedId(levels, machine.bedId)} />
                {/* <div className='label__red'> {machine.bedId}</div> */}
                {/* <div className='label__red'> {getUserIdFromBedId(levels, machine.bedId)}</div> */}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='catalog__open' onClick={openCatalog} >Open Catalog</div>
    </div>
  );
};

export default Unit;
