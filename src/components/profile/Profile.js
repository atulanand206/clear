import { useSelector } from 'react-redux';
import TextLabel from '../textLabel/TextLabel';
import './Profile.scss';

const Profile = () => {

  const { name, phone, username, role } = useSelector((state) => state.authStore)

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
      {/* <TextLabel label={`Phone: ${phone}`} />
      <TextLabel label={`Username: ${username}`} /> */}
    </div>
  );
};

export default Profile;
