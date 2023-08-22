/*import { useState, useCallback } from 'react';
import isEmail from 'validator/es/lib/isEmail';

export default function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const input = e.target;
    console.log(input.value)
    const { value, name } = input;

    if (name === 'name' && input.validity.patternMismatch) {
      input.setCustomValidity('Имя должно содержать только латиницу, кириллицу, пробел или дефис.')
    } else {
      input.setCustomValidity('');
    }

    if (name === 'email') {
      if (!isEmail(value)) {
          input.setCustomValidity('Некорректый адрес почты.');
      } else {
          input.setCustomValidity('');
      }
    }

    setValues({ ...values, [name]: value }); 
    setErrors({ ...errors, [name]: input.validationMessage }); 
    setIsValid(input.closest('form').checkValidity()); 
  };
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => { 
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, resetForm, setIsValid };
}*/
import { useState, useCallback } from 'react';
import isEmail from 'validator/lib/isEmail';

export default function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
    if (target.closest("form").checkValidity() && name === 'email' && !isEmail(value)) {
      setErrors({...errors, [name]: 'Введена невалидная почта' })
      setIsValid(false);
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, isValid, setIsValid, resetForm };
}