import { useSelector } from 'react-redux';
import './Profile.scss';

const Profile = () => {

  const { name, phone, username } = useSelector((state) => state.authStore)

  return (
    <div className='profile__container'>
      <div className='profile__title'>Profile</div>
      <div className='profile__input'>
        <div className='profile__name'>{name}</div>
        <div className='profile__name'>{phone}</div>
        <div className='profile__name'>{username}</div>
      </div>
    </div>
  );
};

export default Profile;
