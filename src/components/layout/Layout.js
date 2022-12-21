import { ReactComponent as GreenMachine } from '../../images/machine-green.svg';
import { ReactComponent as RedMachine } from '../../images/machine-red.svg';
import Chooser from '../chooser/Chooser';
import './Layout.scss';
const Layout = (props) => {

  const { levels } = props

  return (
    <div className='container'>
      <Chooser/>
    </div>
  );
};

export default Layout;
