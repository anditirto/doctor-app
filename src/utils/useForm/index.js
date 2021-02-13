import {useState} from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (formType, formValues) => {
      if (formType === 'reset') {
        return setValues(initialValues);
      }
      return setValues({...values, [formType]: formValues});
    },
  ];
};
