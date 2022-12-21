
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from '../dropdown/Dropdown';
// import { getFloors, getRooms, getBeds } from '../../store/configs';

import './Chooser.scss';
const Chooser = (props) => {

  const { displayNames } = props

  const dispatch = useDispatch();
  const { building } = useSelector((state) => state.buildingStore);

  const { configs } = useSelector((state) => state.configsStore);
  console.log(configs, 'configs');
  console.log(building, 'building');

  // const { floor, room, bedId, userId, getFloors, getRooms, getBeds } = useSelector((state) => state.configsStore);
  // const {  } = configs;

  return (
    <div className='container'>
      {/* <Dropdown
        id='floor'
        displayNames={dispatch(getFloors())}
        selectedId={floor}
      />
      <Dropdown
        id='room'
        displayNames={dispatch(getRooms(floor))}
        selectedId={room}
      />
      <Dropdown
        id='bed'
        displayNames={dispatch(getBeds(floor, room))}
        selectedId={bedId}
      /> */}
    </div>
  );
};

export default Chooser;
