import './ContactForm.css';
import { useState } from 'react';

function ContactForm(props) {
  const title = props.title;
  const inputs = props.inputs;

  return (
    <form action="" className="contact__form">
      <h2 className="form__title">{title}</h2>

      {inputs.map((input, index) => {
        const [inputValue, setInputValue] = useState([input.value]);
        function inputOnChange(event) {
          setInputValue(event.target.value);
        }

        return (
          <label htmlFor='' className="form__field" key={`field-${index}`}>
            <h3 className="field__title">{input.labelTitle}</h3>
            <input type={input.type} placeholder={input.placeholder} value={inputValue} onChange={inputOnChange} pattern={input.pattern !== '' ? input.pattern : undefined} minLength={input.minLength} maxLength={input.maxLength} required className="field__input" />
          </label>
        );
      })}

      <button className="form__send">enviar</button>
    </form>
  );
}

export default ContactForm;