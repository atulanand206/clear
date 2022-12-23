import Chooser from '../chooser/Chooser';
import Profile from '../profile/Profile';
import './Layout.scss';
const Layout = (props) => {

  return (
    <div className='layout__container'>
      <Profile/>
      <Chooser/>
      <div className='layout__close' onClick={props.onClose}>Close</div>
    </div>
  );
};

export default Layout;
