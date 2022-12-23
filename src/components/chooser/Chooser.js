import { useSelector, useDispatch } from 'react-redux';
import { setFloor, setRoom, setBedId, setUserId } from './../../store/configs';
import { selectBedId, selectUserId } from '../../store/beduser';
import Dropdown from '../dropdown/Dropdown';
import './Chooser.scss';
import { useEffect } from 'react';
import { useCustomers } from './../../apis/CustomerAPI';
import BedUserEdit from '../beduseredit/BedUserEdit';
import BedUserRead from '../beduserread/BedUserRead';

const Chooser = (props) => {
  const dispatch = useDispatch()

  const { role } = useSelector((state) => state.authStore)
  const { selectedBedId, selectedUserId } = useSelector((state) => state.beduserStore)
  const { floor, room, bedId } = useSelector((state) => state.configsStore);
  const { levels, floors } = useSelector((state) => state.buildingStore);

  const { data, isError, isLoading } = useCustomers()

  const getCustomers = () => {
    if (isLoading || isError || data === undefined || data === null) {
      return []
    }
    return data
  }

  const getRooms = (floor) => {
    return Object.keys(levels).length > 0 ? Object.keys(levels[floor]) : []
  }

  const getBeds = (floor, room) => {
    if (levels === undefined || levels === null) {
      return []
    }
    console.log(levels)
    if (Object.keys(levels).length === 0 || !levels.hasOwnProperty(floor) ||
      Object.keys(levels[floor]).length === 0 || !levels[floor].hasOwnProperty(room) ||
      Object.keys(levels[floor][room]).length === 0) {
      return []
    }
    return Object.keys(levels[floor][room])
  }

  const getBedId = (floor, room, bedId) => {
    if (levels === {}) {
      return ''
    }
    if (Object.keys(levels).length === 0 || !levels.hasOwnProperty(floor) ||
      Object.keys(levels[floor]).length === 0 || !levels[floor].hasOwnProperty(room) ||
      Object.keys(levels[floor][room]).length === 0) {
      return ''
    }
    return levels[floor][room][bedId]["bedId"]
  }

  const getUserId = (floor, room, bedId) => {
    if (levels === {}) {
      return ''
    }
    if (Object.keys(levels).length === 0 ||
      Object.keys(levels[floor]).length === 0 ||
      Object.keys(levels[floor][room]).length === 0) {
      return ''
    }
    return levels[floor][room][bedId]["userId"]
  }

  const onFloorSelected = (floor) => {
    dispatch(setFloor({ 'floor': floor }))
  }

  const onRoomSelected = (room) => {
    dispatch(setRoom({ 'room': room }))
  }

  const onBedSelected = (bed) => {
    dispatch(setBedId({ 'bedId': bed }))
    dispatch(selectBedId({ 'bedId': getBedId(floor, room, bed) }))
    dispatch(selectUserId({ 'userId': getUserId(floor, room, bed) }))
  }

  useEffect(() => {
    dispatch(setRoom({ 'room': floor * 100 + 1 }))
  }, [floor])

  useEffect(() => {
    onBedSelected(1)
  }, [room])

  const isEditable = () => {
    return role === 2 || role === 1
  }

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
      <div className='name'>{isEditable() ? <BedUserEdit customers={getCustomers()} /> : <BedUserRead />}</div>
    </div>
  );
};

export default Chooser;