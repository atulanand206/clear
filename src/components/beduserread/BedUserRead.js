import { useCustomers } from '../../apis/CustomerAPI';
import TextLabel from '../textLabel/TextLabel';
import './BedUserRead.scss';

const BedUserRead = ({containerClass, ...props}) => {

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

  const phone = (userId)  => {
    if (isLoading || isError || data === undefined || data === null) {
      return 'N/A'
    }
    const user = data.find((user) => user.id === userId)
    if (user === undefined) {
      return 'N/A'
    }
    return user.phone
  }

  return (
    <div className={`bur__container ${containerClass} `}>
        <TextLabel label={`${username(props.userId)}`} />
        <TextLabel clickable label={`${phone(props.userId)}`} />
    </div>
  );
};

export default BedUserRead;
