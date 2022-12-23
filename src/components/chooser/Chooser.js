import { useSelector, useDispatch } from 'react-redux';
import { setFloor, setRoom, setBedId } from './../../store/configs';
import { getRooms, getBeds, getBedId, getUserId} from '../../urls/BuildingUtils';
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
  const { floor, room, bedId } = useSelector((state) => state.configsStore);
  const { levels, floors } = useSelector((state) => state.buildingStore);
  const { selectedBedId, selectedUserId } = useSelector((state) => state.beduserStore)

  const { data, isError, isLoading } = useCustomers()

  const getCustomers = () => {
    if (isLoading || isError || data === undefined || data === null) {
      return []
    }
    return data
  }

  const onFloorSelected = (floor) => {
    dispatch(setFloor({ 'floor': floor }))
  }

  const onRoomSelected = (room) => {
    dispatch(setRoom({ 'room': room }))
  }

  const onBedSelected = (bed) => {
    dispatch(setBedId({ 'bedId': bed }))
    dispatch(selectBedId({ 'bedId': getBedId(levels, floor, room, bed) }))
    dispatch(selectUserId({ 'userId': getUserId(levels, floor, room, bed) }))
  }

  useEffect(() => {
    dispatch(setRoom({ 'room': floor * 100 + 1 }))
  }, [floor])

  useEffect(() => {
    onBedSelected(1)
  }, [room])

  const isEditable = () => {
    return role === 0 || role === 1
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
          displayNames={getRooms(levels, floor)}
          selectedName={room}
          onClick={onRoomSelected}
        />
        <Dropdown
          id='bed'
          displayNames={getBeds(levels, floor, room)}
          selectedName={bedId}
          onClick={onBedSelected}
        />
      </div>
      <div className='name'>{isEditable() ? <BedUserEdit customers={getCustomers()} /> : <BedUserRead userId={selectedUserId}/>}</div>
    </div>
  );
};

export default Chooser;