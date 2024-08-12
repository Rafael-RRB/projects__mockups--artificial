import './ContactForm.css';
import { useState } from 'react';

function ContactForm(props) {
  const title = props.title;
  const inputs = props.inputs;

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailNameValue] = useState('');
  const [topicValue, setTopicNameValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const valueList = [nameValue, emailValue, topicValue, messageValue, phoneValue];
  const valueFunctionList = [setNameValue, setEmailNameValue, setTopicNameValue, setMessageValue, setPhoneValue];

  function contactformOnSubmit(event) {
    event.preventDefault();
    alert('Enviado com sucesso!');    
    valueFunctionList.forEach((func) => func(''));
    console.log(valueList);
  }
  // Updates a textarea's height, based on the amount of text it currently has.
  return (
    <form onSubmit={event => contactformOnSubmit(event)} className="contact__form">
      <h2 className="form__title">{title}</h2>

      
      {inputs.map((input, index) => {
        function inputOnChange(event, element) {
          const elementTarget = event.target;
          const elementValue = elementTarget.value;
          valueFunctionList[index](elementValue);
        }
        
        // Maybe I should have, instead, used "document.createElement", then applied each attribute. Buuut...
        // Edit: Nope. Don't do that.
        let element;
        // ChatGPT recommended this. It's pretty neat! I didn't know I could do that.
        const sharedAttributes = {
          type: input.type,
          placeholder: input.placeholder,
          value: valueList[index],
          onChange: event => inputOnChange(event, input.element),
          pattern: input.pattern !== '' ? input.pattern : undefined,
          minLength: input.minLength,
          maxLength: input.maxLength,
          required: true
        }
        if(input.element === 'input') {
          // For an input.
          element = (<input {...sharedAttributes} className="field__editable field__editable--input" />);
        } else if(input.element === 'textarea') {
          // For a textarea.
          element = (<textarea {...sharedAttributes} className="field__editable field__editable--textarea" />);
        } else {
          throw Error('Invalid "element" property value. Value must either be an input or a textarea.');
        }

        return (
          <label className="form__field" key={`field-${index}`}>
            <h3 className="field__title">{input.labelTitle}</h3>
            {element}
          </label>
        );
      })}
      

      <button className="form__send" >enviar</button>
    </form>
  );
}

export default ContactForm;

/*


<input type='text'/>
<input type='text'/>
<input type='text'/>
<textarea name='' id=''></textarea>
<input type='text'/>


*/