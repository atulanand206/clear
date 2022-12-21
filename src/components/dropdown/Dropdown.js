
import { useSelector, useDispatch } from 'react-redux';
import './Dropdown.scss';

const Dropdown = (props) => {

  const { id, displayNames, selectedId } = props

  return (
    <div className='container' id={id}>
      <div className='dropdown__selected'>
        {displayNames[selectedId]}
      </div>
      {displayNames.map((displayName, index) => {
        return (
          <div key={index} className='dropdown'>
            <div className='dropdown__options'>
              <div className='dropdown__option'>
                {displayName}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Dropdown;
