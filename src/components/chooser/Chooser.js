import { useSelector, useDispatch } from 'react-redux';
import { setFloor, setRoom, setBedId, setUserId } from './../../store/configs';
import Dropdown from '../dropdown/Dropdown';
import './Chooser.scss';
import { useEffect } from 'react';

const Chooser = (props) => {
  const dispatch = useDispatch()

  const { floor, room, bedId, userId } = useSelector((state) => state.configsStore);
  const { levels, floors } = useSelector((state) => state.buildingStore);

  const getRooms = (floor) => {
    return Object.keys(levels).length > 0 ? Object.keys(levels[floor]) : []
  }

  const getBeds = (floor, room) => {
    if (levels === undefined) {
      return []
    }
    console.log(levels)
    if (Object.keys(levels).length === 0 ||
      Object.keys(levels[floor]).length === 0 ||
      Object.keys(levels[floor][room]).length === 0) {
      return []
    }
    return Object.keys(levels[floor][room])
  }

  const getName = (floor, room, bedId) => {
    if (levels === {}) {
      return ''
    }
    if (Object.keys(levels).length === 0 ||
      Object.keys(levels[floor]).length === 0 ||
      Object.keys(levels[floor][room]).length === 0) {
      return ''
    }
    console.log(levels[floor][room][bedId], 'userId')
    return levels[floor][room][bedId]["bedId"]
  }

  const onFloorSelected = (floor) => {
    dispatch(setFloor({'floor': floor}))
  }

  const onRoomSelected = (room) => {
    dispatch(setRoom({'room': room}))
  }
  
  const onBedSelected = (bed) => {
    dispatch(setBedId({'bedId': bed}))
  }

  useEffect(() => {
    dispatch(setRoom({'room': floor * 100 + 1}))
    dispatch(setBedId({'bedId': 1}))
    dispatch(setUserId({'userId': getName(floor, floor * 100 + 1, 1)}))
  }, [floor])

  useEffect(() => {
    dispatch(setBedId({'bedId': 1}))
    dispatch(setUserId({'userId': getName(floor, room, 1)}))
  }, [room])

  useEffect(() => {
    dispatch(setUserId({'userId': getName(floor, room, bedId)}))
  }, [bedId])

  return (
    <div className='chooser__container'>
      <div className='selector'>
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
      <div className='name'>
        <div className='name__label'>{getName(floor, room, bedId)}</div>
      </div>
    </div>
  );
};

export default Chooser;