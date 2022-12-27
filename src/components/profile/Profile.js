import { useSelector } from 'react-redux';
import TextLabel from '../textLabel/TextLabel';
import './Profile.scss';

const Profile = () => {

  const { name, role } = useSelector((state) => state.authStore)

  const roleString = (role) => {
    switch (role) {
      case 0: return 'Admin'
      case 1: return 'Manager'
      case 2: return 'Staff'
      case 3: return 'Resident'
      default: return 'Resident'
    }
  }

  return (
    <div className='profile__container'>
      <TextLabel label={`${roleString(role)}, ${name}`} />
    </div>
  );
};

export default Profile;
