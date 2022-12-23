import { useSelector, useDispatch } from 'react-redux';
import './BedUserRead.scss';

const BedUserRead = (props) => {

  const dispatch = useDispatch()

  const { selectedBedId, selectedUserId } = useSelector((state) => state.beduserStore)

  return (
    <div className='bur__container'>
        <div className='bur__label'>UserId: {selectedUserId}</div>
        <div className='bur__label'>BedId: {selectedBedId}</div>
    </div>
  );
};

export default BedUserRead;
