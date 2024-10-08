import './LoginForm.css';
import { useState } from 'react';

function LoginForm(props) {
  // localStorage logins. Yes, it's clear text - this is a static, front-end mockup website, y'know.
  let loginList = props.loginData.loginList;
  let loginEmailList;

  loginEmailList = loginList.map(login => login.user);

  // isLogin changes the form's functionality (login vs sign up)
  const [isLogin, setIsLogin] = useState(props.isLogin);
  
  // useState for the form's inputs
  const [emailInput, setEmailInput] = useState('');
  const [pwdInput, setPwdInput] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  
  // clears useState & form
  function clearInputState() {
    setEmailInput('');
    setPwdInput('');
    setConfirmPwd('');
    const fieldset = document.getElementById('fieldset');
    const inputList = fieldset.querySelectorAll('input');
    inputList.forEach(input => {
      input.setCustomValidity('');
    });
  }

  // Changes login type and clears form
  function loginType(type) {
    setIsLogin(type);
    clearInputState();
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
      const userInput = event.target.querySelector('#login-user').value;
      const pwdInput = event.target.querySelector('#login-pwd').value;

      const newAccount = {
        'user': userInput,
        'pwd': pwdInput,
        'imgBase64': 'data:image/webp;base64,UklGRqoCAABXRUJQVlA4WAoAAAAYAAAAGAAAGAAAQUxQSMEAAAABgGPb2rHn/rHV2nZrO5WddE4qG5UH4JSZQXqjsm3b/r7vx/O+KyOIiAmASs2Csbv39W5zMFstCEpfklmM1gWV3xEM7QJxV4ukfkURYkj2ArmR5EnrIJn+kopIGKP8WNNC/gi9YKz6UzGtx4KkA4WPHh2wa4SUV6Sa4b/ads1fng1n+PsltizfbY7Eqqr4FFhHTZXUChzndAG4fvMQ2gAMCFwftIADPoI/8MUpFRA4ZwM/nNKBGT4/ToDL1DeH43wAAFZQOCDiAAAAkAYAnQEqGQAZAAAgACexqoEYWQdnbyL8T/1y/uXOGbH8s2IBfAPtVuQC+APKV/Wb4AP2M9Er/7BHqv7GEAD+/7fih2k0F3gfKaGm3VWbLy2bmrxWfeXsw3X/9qIw1f+WmAhjGb+oxTf0f8Mu16/pbGA80Pt3/6pUonP2M4xPempM67cmH/Hy7U5B4dN/8eL//9rW3sEmbvDjDI42HifcS4Y3TWzVirmGUt+Nn/6Tg3h42xduy2sp/ae+/6TX0pLuZ+FNDf+eqDTitKXJhOTKR1GfNv6hxrzN8grSHs44TzgAAEVYSUbYAAAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAADEBAgARAAAAZgAAAGmHBAABAAAAeAAAAAAAAABgAAAAAQAAAGAAAAABAAAAcGFpbnQubmV0IDUuMC4xMwAABQAAkAcABAAAADAyMzABoAMAAQAAAAEAAAACoAQAAQAAABkAAAADoAQAAQAAABkAAAAFoAQAAQAAALoAAAAAAAAAAgABAAIABAAAAFI5OAACAAcABAAAADAxMDAAAAAA',
        'bannerBase64': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY+BzbPgPAAL/Ac/0OOsPAAAAAElFTkSuQmCC',
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
        <button type='button' className='switch__button' onClick={event => loginType(true)} disabled={isLogin ? true : undefined}>login</button>
        <button type='button' className='switch__button' onClick={event => loginType(false)} disabled={isLogin ? undefined : true}>cadastro</button>
      </div>

      <fieldset className='login-form__fieldset' id='fieldset'>
        <label className='fieldset__field'>
          <h2 className='field__login-title'>E-mail</h2>
          <input type={isLogin ? 'text' : 'email'} value={emailInput} onChange={event => emailOnChange(event)} placeholder='Seu e-mail aqui...' minLength={3} maxLength={50} required id="login-user" className='field__login-input' />
        </label>

        <label className='fieldset__field'>
          <h2 className='field__login-title'>Senha</h2>
          <input type='password' value={pwdInput} onChange={event => pwdOnChange(event)} placeholder='Sua senha aqui...' required pattern={isLogin ? undefined : pwdRegex} id='login-pwd' className='field__login-input' />
        </label>

        {isLogin !== true ? (
          <label className='fieldset__field'>
            <h2 className='field__login-title'>Confirmar</h2>
            <input type='password' value={confirmPwd} onChange={event => pwdConfirmOnChange(event)} placeholder='Confirme sua senha aqui...' required id='login-confirm-pwd' className='field__login-input' />
          </label>
        ) : ''}
      </fieldset>

      <button type='submit' className='login-form__confirm'>{isLogin ? 'entrar' : 'criar conta'}</button>
    </form>
  )
}

export default LoginForm;