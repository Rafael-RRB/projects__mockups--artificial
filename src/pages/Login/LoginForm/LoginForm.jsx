import './LoginForm.css';
import { useState } from 'react';

function LoginForm(props) {
  // localStorage logins. Yes, it's clear text - this is a static, front-end mockup website, y'know.
  let loginList;
  let loginEmailList;
  if(localStorage.getItem('loginList') === null) {
    // If there is no localStorage data, create it.
    console.log('No login list exists in local storage. Login list with Admin account will be created now. Email: admin, Password: admin.');
    let myObject = [{
      "user": "admin",
      "pwd": "admin",
      "imgBase64": "",
      'favorites': []
    }];
    let userObject = {
      'user': 'anonymous',
      'status': 'no-acc'
    }
    localStorage.setItem('loginList', JSON.stringify(myObject));
    localStorage.setItem('loginStatus', JSON.stringify(userObject));
    loginList = myObject;
  } else {
    // If there is localStorage data, retrieve it.
    loginList = JSON.parse(localStorage.getItem('loginList'));
  }
  loginEmailList = loginList.map(login => login.user);

  // isLogin changes the form's functionality (login vs sign up)
  const [isLogin, setIsLogin] = useState(props.isLogin);
  // useState for the form's inputs
  const [emailInput, setEmailInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  // empties useState
  function clearInputState() {
    setEmailInput('');
    setPwdInput('');
    setConfirmPwd('');
  }


  // Custom error message for email field.
  function emailErrorMessage(target) {
    const email = target.value;
    if(isLogin !== true && loginEmailList.includes(email)) {
      target.setCustomValidity('Usuário já existe.');
    } else {
      target.setCustomValidity('');
    }
  }
  // Function called when email input changes.
  function emailOnChange(event) {
    setEmailInput(event.target.value);
    emailErrorMessage(event.target);
  }

  // Uses DeMorgan's theorem... not that I know much about it, though. Will learn more about it in the future.
  // Edit: nope, doesn't use it anymore. DeMorgan's theorem doesn't work in HTML, as there's no way to "invert" the logic.
  const pwdRegex = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&_+=?])[A-Za-z0-9!@#$%&_+=?]{8,128}';

  // Creates a custom error message, explaining what is wrong with the password.
  function pwdErrorMessage(target) {
    // useState was... well, used before. It is unreliable, since it has a "delay".
    const pwd = target.value;
    // if password length is zero, meaning user didn't input anything, don't give a specific error and simply return.
    if(pwd.length === 0) return;
    // Here, concatenate a custom error message.
    let pwdErrorMessage = 'Senha inválida:\n';
    // ... password is too short (minimum of 8 characters);
    if(pwd.length < 8) {
      pwdErrorMessage += '\n- Senha precisa conter 8 caracteres ou mais.';
    }
    // ... password is too long (maximum of 128 characters);
    if(pwd.length > 128 ) {
      pwdErrorMessage += '\n- Senha precisa conter menos de 128 caracteres.';
    }
    // ... password does not contain any lowercase characters;
    if(!(/[a-z]{1}/).test(pwd)) {
      pwdErrorMessage += '\n- Senha precisa conter pelo menos 1 letra minúscula.';
    }
    // ... password does not contain any uppercase characters;
    if(!(/[A-Z]{1}/).test(pwd)) {
      pwdErrorMessage += '\n- Senha precisa conter pelo menos 1 letra maiúscula.';
    }
    // ... password does not contain any digits;
    if(!(/[\d]{1}/).test(pwd)) {
      pwdErrorMessage += '\n- Senha precisa conter pelo menos 1 número.';
    }
    // ... password does not contain any special characters;
    if(!(/[!@#$%&_+=?]{1}/).test(pwd)) {
      pwdErrorMessage += '\n- Senha precisa conter pelo menos um caractere especial (!@#$%&_+=?).';
    }
    
    // Password should only give an error when trying to create a new account.
    console.log(pwdErrorMessage.length > 16);
    if(isLogin !== true) {
      pwdErrorMessage.length > 16 ? target.setCustomValidity(pwdErrorMessage) : target.setCustomValidity('');
    } else {
      target.setCustomValidity('');
    }
    
  }
  // Sadly, changing the error message "onInvalid" did not provide the correct functionality, so I was forced to do this. 
  function pwdOnChange(event) {
    pwdErrorMessage(event.target);
    setPwdInput(event.target.value);
  }

  // Validation for password confirmation
  function pwdConfirmErrorMessage(target) {
    const pwdConfirm = target.value;
    const pwdValue = document.getElementById('login-pwd').value;

    if(pwdValue === pwdConfirm) {
      target.setCustomValidity('');
    } else {
      target.setCustomValidity('As senhas não são iguais.');
    }
  }

  function pwdConfirmOnChange(event) {
    setConfirmPwd(event.target.value);
    pwdConfirmErrorMessage(event.target); 
  }

  function loginFormSubmit(event) {
    event.preventDefault();
    
    if(isLogin) {
      // What to do if the current form is for login.
      const emailInput = document.getElementById('login-user');
      const pwdInput = document.getElementById('login-pwd');
      const errorMessage = 'Usuário e/ou senha incorretos.';
      // If user exists, check password.
      if(loginEmailList.includes(emailInput.value)) {
        JSON.parse(localStorage.getItem('loginList')).forEach(user => {
          if(user.user === emailInput.value) {
            console.log('Found correct user!');
            console.log(user.pwd);
            console.log(pwdInput.value);
            if(user.pwd === pwdInput.value) {
              console.log('Password is correct!');
              emailInput.setCustomValidity('');
              const editLogin = JSON.parse(localStorage.getItem('loginStatus'));
              editLogin.user = event.target.querySelector('#login-user').value;
              editLogin.status = 'logged';
              localStorage.setItem('loginStatus', JSON.stringify(editLogin));
              alert('Login confirmado.');
              window.location.href = './';
            } else {
              event.target.reset();
              clearInputState();
              emailInput.setCustomValidity(errorMessage);
              emailInput.reportValidity();
            }
          }
        });
      } else {
        event.target.reset();
        clearInputState();
        emailInput.setCustomValidity(errorMessage);
        emailInput.reportValidity();
      }
    } else {
      // What to do if the current form is for signup.
      const newAccount = {
        'user': event.target.querySelector('#login-user').value,
        'pwd': event.target.querySelector('#login-pwd').value,
        'imgBase64': '',
        'favorites': []
      };
      loginList.push(newAccount);
      localStorage.setItem('loginList', JSON.stringify(loginList));
      loginEmailList = loginList.map(login => login.user);
      // Clears the form.
      event.target.reset();
      clearInputState();
      setIsLogin(true);
      alert('Conta criada com sucesso!\nAgora por favor, faça login.');
    }
  }

  return (
    <form action='' onSubmit={event => loginFormSubmit(event)} className='main__login-form'>
      <div className='login-form__switch'>
        <button className='switch__button' type='button' onClick={event => setIsLogin(true)} disabled={isLogin ? true : undefined}>Login</button>
        <button className='switch__button' type='button' onClick={event => setIsLogin(false)} disabled={isLogin ? undefined : true}>Nova Conta</button>
      </div>

      <fieldset className='login-form__fieldset'>
        <label htmlFor='' className='fieldset__field'>
          <h2 className='field__login-title'>e-mail</h2>
          <input type={isLogin ? 'text' : 'email'} value={emailInput} onChange={event => emailOnChange(event)} placeholder='Seu e-mail aqui...' minLength={3} maxLength={50} required id="login-user" className='field__login-input' />
        </label>

        <label htmlFor='' className='fieldset__field'>
          <h2 className='field__login-title'>senha</h2>
          <input type='password' value={pwdInput} onChange={event => pwdOnChange(event)} placeholder='Sua senha aqui...' required pattern={isLogin ? undefined : pwdRegex} id='login-pwd' className='field__login-input' />
        </label>

        {isLogin !== true ? (
          <label htmlFor='' className='fieldset__field'>
            <h2 className='field__login-title'>confirmar</h2>
            <input type='password' value={confirmPwd} onChange={event => pwdConfirmOnChange(event)} placeholder='Confirme sua senha aqui...' required id='login-confirm-pwd' className='field__login-input' />
          </label>
        ) : ''}
      </fieldset>

      <button type='submit' className='login-form__confirm'>{...isLogin ? 'entrar' : 'criar conta'}</button>
    </form>
  )
}

export default LoginForm;