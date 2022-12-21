
import { useSelector, useDispatch } from 'react-redux';
import './Dropdown.scss';

const Dropdown = (props) => {

  const { id, displayNames, selectedName, onClick } = props

  console.log(displayNames, 'displayNames')

  const isSelected = (index) => {
    return displayNames[index] == selectedName
  }

  return (
    <div className='dropdown' id={id}>
      <div className='dropdown__options'>
        <div className='dropdown__space'></div>
        {displayNames.map((displayName, index) => {
          return (
            <div 
            key={index}
            onClick={() => onClick(displayName)} 
            className={
              isSelected(index) ? 'dropdown__option--selected' : 'dropdown__option'}>
              {displayName}
            </div>
          )
        })}
        <div className='dropdown__space'></div>
      </div>

    </div>
  );
};

export default Dropdown;
