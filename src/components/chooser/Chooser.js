import { useSelector, useDispatch } from 'react-redux';
import { setFloor, setRoom, setBedId } from './../../store/configs';
import Dropdown from '../dropdown/Dropdown';

import './Chooser.scss';
import { useEffect } from 'react';
const Chooser = (props) => {
  const dispatch = useDispatch()

  const { configsStore, buildingStore } = useSelector((state) => state)

  console.log(configsStore, 'configs');
  console.log(buildingStore, 'building');

  const { floor, room, bedId, userId } = useSelector((state) => state.configsStore);
  const { levels, floors } = useSelector((state) => state.buildingStore);

  const getRooms = (floor) => {
    return Object.keys(levels).length > 0 ? Object.keys(levels[floor]) : []
  }

  const getBeds = (floor, room) => {
    if (Object.keys(levels).length === 0 ||
      Object.keys(levels[floor]).length === 0 ||
      Object.keys(levels[floor][room]).length === 0) {
      return []
    }
    console.log(levels[floor][room], 'beds')
    return Object.keys(levels[floor][room])
  }

  const onFloorSelected = (floor) => {
    console.log('flor', floor)
    dispatch(setFloor({'floor': floor}))
  }

  const onRoomSelected = (room) => {
    console.log('room', room)
    dispatch(setRoom({'room': room}))
  }
  
  const onBedSelected = (bed) => {
    console.log('bed', bed)
    dispatch(setBedId({'bedId': bed}))
  }

  console.log(floor)
  console.log(floors, "flrs")
  return (
    <div className='container'>
      <Dropdown
        id='floor'
        displayNames={floors}
        selectedName={floor}
        onClick={onFloorSelected}
      />
      <Dropdown
        id='room'
        displayNames={getRooms(floor)}
        selectedName={room}
        onClick={onRoomSelected}
      />
      <Dropdown
        id='bed'
        displayNames={getBeds(floor, room)}
        selectedName={bedId}
        onClick={onBedSelected}
      />
    </div>
  );
};

export default Chooser;