
import { useEffect, useRef } from 'react'
import './Dropdown.scss';

const Dropdown = (props) => {

  const { id, displayNames, selectedName, onClick } = props

  const selectedDivRef = useRef(null);

  const onItemSelected = (index) => {
    onClick(displayNames[index])
  }

  useEffect(() => {
    scrollToCenter();
  })

  useEffect(() => {
    scrollToCenter();
  }, [selectedName])

  const scrollToCenter = () => {
    if (selectedDivRef && selectedDivRef.current) {
      selectedDivRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  const isSelected = (index) => {
    return displayNames[index] === selectedName
  }

  return (
    <div className='dropdown' id={id}>
      <div className='dropdown__options'>
        <div className='dropdown__space'></div>
        {displayNames.map((displayName, index) => {
          return (
            <div 
            ref={isSelected(index) ? selectedDivRef : null}
            key={index}
            onClick={() => onItemSelected(index)} 
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
