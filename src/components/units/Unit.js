import { useSelector } from 'react-redux';
import { markMachine, unmarkMachine, useMachines } from '../../apis/MachineAPI';
import { ReactComponent as GreenMachine } from '../../images/machine-green.svg';
import { ReactComponent as RedMachine } from '../../images/machine-red.svg';
import Profile from '../profile/Profile';
import { getUserIdFromBedId } from '../../urls/BuildingUtils';
import './Unit.scss';
import BedUserRead from '../beduserread/BedUserRead';

const Unit = (props) => {

  const { openCatalog, logout } = props;
  // const { machines } = useSelector((state) => state.machinesStore);
  const { levels } = useSelector((state) => state.buildingStore);
  const { id } = useSelector((state) => state.authStore);
  const { data, isError, isLoading, refetch } = useMachines();

  const onMarkMachine = (machineId, status) => {
    if (status === 0) {
      markMachine({ machineId: machineId, userId: id})
        .then(() => {
          onRefresh();
        });
    }
  }

  const onUnmarkMachine = (machineId, status) => {
    const payload = { machineId: machineId, userId: id}
    if (status === 1) {
      unmarkMachine(payload)
        .then(() => {
          onRefresh();
        });
    }
  }

  const onRefresh = () => {
    refetch();
  }

  const getMachines = () => {
    if (isLoading || isError || data === undefined || data === null) {
      return []
    }
    return data
  }

  const isAvailable = (machine) => {
    return machine.bedId === '';
  };

  return (
    <div className='unit__container'>
      <div className='unit__header'>
        <div className='catalog__open' onClick={logout} >Exit App</div>
        
        <div className='catalog__open' onClick={openCatalog} >Open Catalog</div>
        <Profile />
      </div>
      <div className='unit__machines'>
        {getMachines().map((machine, index) => (
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
            
            <div >
              <h2 className={machine.status ? 'label__red' : 'label__green'}> {machine.name}</h2>
              <BedUserRead containerClass={!machine.status ? 'hidden' : ''} userId={getUserIdFromBedId(levels, machine.bedId)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unit;
