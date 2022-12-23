import { useSelector, useDispatch } from 'react-redux';
import { selectBedId, selectUserId } from '../../store/beduser';

import './BedUserEdit.scss';

const BedUserEdit = (props) => {

  const dispatch = useDispatch()

  const { selectedBedId, selectedUserId } = useSelector((state) => state.beduserStore)

  const onUserSelected = (userId) => {
    dispatch(selectUserId({ 'userId': userId }))
  }

  const onBedSelected = (userId) => {
    dispatch(selectBedId({ 'userId': userId }))
  }

  return (
    <div className='bu__container'>
        <div className='bu__label'>Name</div>
        <select name="user_ids" id="user_ids">
          {props.customers && props.customers.map((customer) => {
            return <option key={customer.id} value={customer.id}>{customer.name}</option>
          })}
        </select>
        <input type='text' key='bedId' className='bu__value' onChange={(e) => onBedSelected(e.target.value)} value={selectedBedId}></input>
    </div>
  );
};

export default BedUserEdit;
