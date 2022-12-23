import { useSelector, useDispatch } from 'react-redux';
import './Profile.scss';

const Profile = () => {

  const { name } = useSelector((state) => state.authStore)

  return (
    <div className='profile__container'>
      <div className='profile__title'>Profile</div>
      <div className='profile__input'>
        <div className='profile__name'>{name}</div>
      </div>
    </div>
  );
};

export default Profile;
