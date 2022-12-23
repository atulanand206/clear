import { useCustomers } from '../../apis/CustomerAPI';
import TextLabel from '../textLabel/TextLabel';
import './BedUserRead.scss';

const BedUserRead = (props) => {

  const { data, isError, isLoading } = useCustomers()

  const username = (userId)  => {
    if (isLoading || isError || data === undefined || data === null) {
      return 'N/A'
    }
    const user = data.find((user) => user.id === userId)
    if (user === undefined) {
      return 'N/A'
    }
    return user.name
  }

  return (
    <div className='bur__container'>
        {/* <TextLabel label={`UserId: ${selectedUserId}`} /> */}
        <TextLabel label={`${username(props.userId)}`} />
        {/* <TextLabel label={`BedId: ${selectedBedId}`} /> */}
    </div>
  );
};

export default BedUserRead;
