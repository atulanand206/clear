import { useSelector, useDispatch } from 'react-redux';
import { assignBedToUser } from '../../apis/BuildingAPI';
import { selectBedId, selectUserId } from '../../store/beduser';
import { getUserId } from '../../urls/BuildingUtils';

import './BedUserEdit.scss';

const BedUserEdit = (props) => {

  const { room, buildingId } = useSelector((state) => state.configsStore);

  const dispatch = useDispatch()

  const { selectedBedId, selectedUserId } = useSelector((state) => state.beduserStore)

  const onBedSelected = (userId) => {
    dispatch(selectBedId({ 'userId': userId }))
  }

  const onUserSelected = (event) => {
    const userId = event.target.value
    dispatch(selectUserId({ 'userId': userId }))
  }

  const onAssign = () => {
    console.log('Assigning bedId: ' + selectedBedId + ' to userId: ' + selectedUserId)
    const payload = {
      'bedId': selectedBedId,
      'userId': selectedUserId,
      'roomNo': room,
      'buildingId': buildingId,
      'sharingStatus': 0
    }
    assignBedToUser(payload)
      .then((response) => {
        console.log('Assigning bedId: ' + selectedBedId + ' to userId: ' + selectedUserId + ' succeeded' + response)
      })
      .catch((error) => {
        console.log('Assigning bedId: ' + selectedBedId + ' to userId: ' + selectedUserId + ' failed' + error)
      })
  }

  const { levels, floors } = useSelector((state) => state.buildingStore);

  const isBedAssigned = () => {
    if (levels === undefined || levels === null || levels.length === 0 || levels === {}) {
      return false
    }
    const userId = getUserId(levels, room/100, room, selectedBedId)
    return userId !== null && userId !== undefined && userId !== ''
  }

  return (
    <div className='bu__container'>
        <div className='bu__label'>Name</div>
        <select name="user_ids" id="user_ids" onChange={onUserSelected}>
          {props.customers && props.customers.map((customer) => {
            return <option key={customer.id} value={customer.id}>{customer.name}</option>
          })}
        </select>
        <input type='text' key='bedId' className='bu__value' onChange={(e) => onBedSelected(e.target.value)} value={selectedBedId}></input>
        <input type='submit' value={(getUserId(levels, room/100, room, selectedBedId)) ? 'Revoke' : 'Assign'} onClick={onAssign} />
    </div>
  );
};

export default BedUserEdit;
