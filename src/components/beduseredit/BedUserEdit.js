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
        <input type='text' key='userId' className='bu__value' onChange={(e) => onUserSelected(e.target.value)} value={selectedUserId}></input>
        <input type='text' key='bedId' className='bu__value' onChange={(e) => onBedSelected(e.target.value)} value={selectedBedId}></input>
    </div>
  );
};

export default BedUserEdit;
