import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = ({ onSubmit }) => (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        todo: '', // provide initial value for 'todo' field
      }}
      onSubmit={(values, {resetForm}) => {
        onSubmit(values); // call the onSubmit handler passed as prop
        resetForm();
      }}
    >
      {({dirty, values }) => ( // include values in the render props function
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="todo" placeholder="TextHere" /> {/* use 'todo' as name for the field */}
          <Button type="submit" disabled={!dirty || !values.todo.length}>
            Submit
          </Button> {/* disable the button if input is empty */}
        </Form>
      )}
    </Formik>
  </div>
);

export default BasicForm;
