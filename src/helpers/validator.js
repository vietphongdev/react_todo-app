import { messages } from '../constants/messages';

const requiredValidator = (value) => {
  let error = null;
  if (!value) {
    error = messages.FIELD_IS_REQUIRED;
  }
  return error;
};

const maxLengthValidator = (value, maxLength) => {
  let error = null;
  if (value.length > maxLength) {
    error = `${messages.FIELD_MAX_LENGTH} ${maxLength}`;
  }
  return error;
};

export const validator = (validations, values) => {
  let errors = {};
  for (const field in validations) {
    const value = values[field];
    const rules = validations[field];
    for (const rule in rules) {
      let error;
      switch (rule) {
        case 'required':
          error = requiredValidator(value);
          break;
        case 'maxLength':
          const maxLength = rules[rule];
          error = maxLengthValidator(value, maxLength);
          break;
        default:
          break;
      }
      if (error) {
        errors[field] = error;
        break;
      }
    }
  }
  const isValidForm = !Object.keys(errors).some((error) => error);
  return {
    isValidForm,
    errors,
  };
};
