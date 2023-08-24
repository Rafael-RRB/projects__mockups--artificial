import './ContactForm.css';
import { useState } from 'react';

function ContactForm(props) {
  const title = props.title;
  const inputs = props.inputs;

  // Updates a textarea's height, based on the amount of text it currently has.
  return (
    <form action="" className="contact__form">
      <h2 className="form__title">{title}</h2>

      {inputs.map((input, index) => {
        const [inputValue, setInputValue] = useState([input.value]);
        function inputOnChange(event, element) {
          const elementTarget = event.target;
          const elementValue = elementTarget.value;
          setInputValue(elementValue);
          // I went a little bit crazy on this one, but...
          if(element === 'textarea') {
            // I feel *really* stupid about this one... at least it'll be a learning experience. Sigh. I'll just comment it out.
            // Or maybe it's not completely useless... let's see. Edit: nevermind...

            //elementTarget.style.height = elementValue === '' ? '10em' : `${elementTarget.scrollHeight}px`;

            const elementPaddingTop = parseFloat(window.getComputedStyle(elementTarget).paddingTop);
            const elementLineHeight = parseFloat(window.getComputedStyle(elementTarget).lineHeight);
            const elementMinHeight = elementLineHeight * 5;
            const elementScrollHeight = elementTarget.scrollHeight;

            elementTarget.style.height = `${elementScrollHeight < elementMinHeight ? elementMinHeight : elementScrollHeight}px`;

            /*
            const elementPaddingTop = window.getComputedStyle(elementTarget).paddingTop;
            const elementPaddingLeft = window.getComputedStyle(elementTarget).paddingLeft;
            const elementPaddingRight = window.getComputedStyle(elementTarget).paddingRight;
            const elementPaddingHorizontal = parseFloat(elementPaddingLeft) + parseFloat(elementPaddingRight);
            const elementWidth = window.getComputedStyle(elementTarget).width; // has 'px'.
            const elementFontFamilies = window.getComputedStyle(elementTarget).fontFamily.split(',').map(fonts => fonts.trim());
            const elementFontSize = window.getComputedStyle(elementTarget).fontSize; // has 'px'.
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            // Reminder: "ctx.font" needs everything, apparently. E.g.: "bold 48px serif"
            ctx.font = `${elementFontSize} ${elementFontFamilies[0]}`;
            const textVisualLength = ctx.measureText(elementValue);
            const textWidthTotal = textVisualLength.width;
            const textHeight = textVisualLength.fontBoundingBoxAscent + textVisualLength.fontBoundingBoxDescent;

            // Reminder: parseInt removes strings... or at least 'px'. E.g.: '10px' => '10'.
            const canvasHeightMult = (textWidthTotal) / ((parseFloat(elementWidth) - elementPaddingHorizontal));
            const result = 50 + (textHeight * Math.ceil(canvasHeightMult + 0.01) - textHeight);
            console.log(textVisualLength);
            */
          }
        }

        // Maybe I should have, instead, used "document.createElement", then applied each attribute. Buuut...
        // Edit: Nope. Don't do that.
        let element;
        // ChatGPT recommended this. It's pretty neat! I didn't know I could do that.
        const sharedAttributes = {
          type: input.type,
          placeholder: input.placeholder,
          value: inputValue,
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

      <button className="form__send">enviar</button>
    </form>
  );
}

export default ContactForm;