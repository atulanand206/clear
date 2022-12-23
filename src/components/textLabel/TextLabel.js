import './TextLabel.scss';

const TextLabel = (props) => {
  return (
    <div className='textLabel__container'>
      <div className='textLabel__label'>{props.label}</div>
    </div>
  );
}

export default TextLabel;