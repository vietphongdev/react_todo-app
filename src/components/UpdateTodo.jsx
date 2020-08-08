import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { updateTodo } from '../flux/actions/todoAction';
import { validator } from '../helpers/validator';
import CalendarIcon from './icons/Calendar';
import { initialErrors, initialValues, validations } from './initialForm';

const UpdateTodo = ({ todo, toggleCollapse }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(todo);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleDateChange = (date) => {
    setValues({
      ...values,
      dueDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValidForm, errors } = validator(validations, values);
    setErrors(errors);
    if (isValidForm) {
      const action = updateTodo(values);
      dispatch(action);
      toggleCollapse();
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      {/* Title */}
      <FormGroup>
        <Label className="field-required">
          <b>Title</b>
        </Label>
        <Input
          type="text"
          name="title"
          value={values.title}
          placeholder="Add new task..."
          invalid={!!errors.title}
          onChange={handleChange}
        />
        {errors.title ? <FormFeedback>{errors.title}</FormFeedback> : null}
      </FormGroup>
      {/* Description */}
      <FormGroup>
        <Label>
          <b>Description</b>
        </Label>
        <Input
          type="textarea"
          placeholder="Add description..."
          rows={6}
          name="description"
          value={values.description}
          invalid={!!errors.description}
          onChange={handleChange}
        />
        {errors.description ? (
          <FormFeedback>{errors.description}</FormFeedback>
        ) : null}
      </FormGroup>
      <Row className="d-flex justify-content-between">
        {/* Due Date */}
        <Col xs={12} lg={7}>
          <FormGroup>
            <Label xs={12} className="p-0 mb-2 field-required">
              <b>Due Date</b>
            </Label>
            <Label className="border d-flex p-1 align-items-center">
              <DatePicker
                selected={
                  values.dueDate ? new Date(values.dueDate) : new Date()
                }
                minDate={initialValues.dueDate}
                dateFormat="dd MMMM yyyy"
                onChange={handleDateChange}
                className="input-no-border input-no-outlie"
              />
              <CalendarIcon />
            </Label>
            {errors.dueDate ? <div>{errors.dueDate}</div> : null}
          </FormGroup>
        </Col>
        {/* Piorirty */}
        <Col xs={12} lg={5}>
          <FormGroup>
            <Label>
              <b>Piorirty</b>
            </Label>
            <Input
              type="select"
              name="piorirty"
              value={values.piorirty || initialValues.piorirty}
              onChange={handleChange}
            >
              <option>low</option>
              <option>normal</option>
              <option>high</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      {/* Start Exam */}
      <FormGroup>
        <Button block color="success" size="sm">
          Update
        </Button>
      </FormGroup>
    </Form>
  );
};

export default UpdateTodo;
