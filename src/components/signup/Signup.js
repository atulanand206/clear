import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setPassword, setName, setPhone, setRole } from '../../store/signup';
import { signup } from '../../apis/LoginAPI';
import './Signup.scss';

const Signup = (props) => {

  const dispatch = useDispatch()

  const { username, password, name, phone, role } = useSelector((state) => state.signupStore)

  const onUsernameChanged = (username) => {
    dispatch(setUserName({ 'username': username }))
  }

  const onPasswordChanged = (password) => {
    dispatch(setPassword({ 'password': password }))
  }

  const onNameChanged = (name) => {
    dispatch(setName({ 'name': name }))
  }

  const onPhoneChanged = (phone) => {
    dispatch(setPhone({ 'phone': phone }))
  }

  const onRoleChanged = (role) => {
    dispatch(setRole({ 'role': role }))
  }

  const onSignup = (e) => {
    e.preventDefault();
    signup(username, password, name, phone).then((res) => {
      props.onSignup()
    })
  }

  return (
    <div className='login__container'>
      <div className='login__form'>
        <div className='login__form__title'>Sign up</div>
        <form className='login__form__input' onSubmit={onSignup}>
          <input type='text' placeholder='Username' value={username} onChange={(e) => onUsernameChanged(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e) => onPasswordChanged(e.target.value)} />
          <input type='text' placeholder='Name' value={name} onChange={(e) => onNameChanged(e.target.value)} />
          <input type='phone' placeholder='Phone' value={phone} onChange={(e) => onPhoneChanged(e.target.value)} />
          <input type='text' placeholder='Role' value={role} onChange={(e) => onRoleChanged(e.target.value)} />
          <input type='submit' value='Signup' />
        </form>
        <div className='login__form__title' onClick={props.onLogin}>Login</div>
      </div>
    </div>
  );
};

export default Signup;
