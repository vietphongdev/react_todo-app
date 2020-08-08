const initialValues = {
  title: '',
  description: '',
  dueDate: new Date(),
  piorirty: 'normal',
};

const validations = {
  title: {
    required: true,
    maxLength: 30,
  },
  description: {
    maxLength: 50,
  },
  dueDate: {
    required: true,
  },
};

const initialErrors = {
  title: null,
  description: null,
  dueDate: null,
};

export { initialValues, validations, initialErrors };
