import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setPassword, setLoginProfile } from './../../store/auth';
import { login } from './../../apis/LoginAPI';
import './Login.scss';

const Login = (props) => {

  const dispatch = useDispatch()

  const { username, password } = useSelector((state) => state.authStore)

  useEffect(() => {
    onUsernameChanged('')
    onPasswordChanged('')
  }, [])

  const onUsernameChanged = (username) => {
    dispatch(setUserName({ 'username': username }))
  }

  const onPasswordChanged = (password) => {
    dispatch(setPassword({ 'password': password }))
  }

  const onLogin = (e) => {
    e.preventDefault();
    login(username, password).then((res) => {
      dispatch(setLoginProfile(res.user))
      sessionStorage.setItem('token', res.token)
      onPasswordChanged('')
      props.onLogin()
    })
  }

  return (
    <div className='login__container'>
      <div className='login__form'>
        <div className='login__form__title'>Login</div>
        <form className='login__form__input' onSubmit={onLogin}>
          <input type='text' placeholder='Username' value={username} onChange={(e) => onUsernameChanged(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e) => onPasswordChanged(e.target.value)} />
          <input type='submit' value='Login' />
        </form>
      </div>
    </div>
  );
};

export default Login;
