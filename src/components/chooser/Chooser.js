import { useSelector, useDispatch } from 'react-redux';
import { setFloor, setRoom, setBedId } from './../../store/configs';
import { getFloors, getRooms, getBeds, getBedId, getUserId} from '../../urls/BuildingUtils';
import { selectBedId, selectUserId } from '../../store/beduser';
import Dropdown from '../dropdown/Dropdown';
import './Chooser.scss';
import { useCallback, useEffect } from 'react';
import { useCustomers } from './../../apis/CustomerAPI';
import BedUserEdit from '../beduseredit/BedUserEdit';
import BedUserRead from '../beduserread/BedUserRead';

const Chooser = (props) => {
  const dispatch = useDispatch()
  const { levels } = props;

  const { role } = useSelector((state) => state.authStore)
  const { floor, room, bedId } = useSelector((state) => state.configsStore);
  const { selectedUserId } = useSelector((state) => state.beduserStore)

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

  const onBedSelected = useCallback((bed) => {
    dispatch(setBedId({ 'bedId': bed }))
    dispatch(selectBedId({ 'bedId': getBedId(levels, floor, room, bed) }))
    dispatch(selectUserId({ 'userId': getUserId(levels, floor, room, bed) }))
  }, [dispatch, levels, floor, room])

  useEffect(() => {
    dispatch(setRoom({ 'room': floor * 100 + 1 }))
  }, [dispatch, floor])

  useEffect(() => {
    onBedSelected(1)
  }, [room, onBedSelected])

  const isEditable = () => {
    return role === 0 || role === 1
  }

  return (
    <div className='chooser__container'>
      <div className='selector'>
        <Dropdown
          id='floor'
          displayNames={getFloors()}
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