import { useBuilding } from '../../apis/BuildingAPI';
import Chooser from '../chooser/Chooser';
import Profile from '../profile/Profile';
import './Layout.scss';
const Layout = (props) => {

  const { data, isLoading, isError } = useBuilding();

  const getLevels = () => {
    if (isLoading || isError || data === undefined) {
      return;
    }
    return data.layout;
  }

  return (
    <div className='layout__container'>
      <Profile/>
      <Chooser levels={getLevels()}/>
      <div className='layout__close' onClick={props.onClose}>Close Catalog</div>
    </div>
  );
};

export default Layout;
