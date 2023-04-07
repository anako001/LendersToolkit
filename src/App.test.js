import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders todo app with form and table', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Check if the "Todo Table" heading is rendered
  const headingElement = screen.getByRole('heading', { name: /todo table/i });
  expect(headingElement).toBeInTheDocument();

  // Check if the "Add Todo" button is rendered
  const addButtonElement = screen.getByRole('button', { name: /add todo/i });
  expect(addButtonElement).toBeInTheDocument();

  // Check if the form is not initially rendered
  const formElement = screen.queryByRole('form');
  expect(formElement).not.toBeInTheDocument();

  // Click on the "Add Todo" button to open the form
  fireEvent.click(addButtonElement);

  // Check if the form is rendered after clicking the "Add Todo" button
  const formElementAfterClick = screen.getByRole('form');
  expect(formElementAfterClick).toBeInTheDocument();

  // Fill out the form with a todo and submit it
  const todoInput = screen.getByLabelText(/todo/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  fireEvent.change(todoInput, { target: { value: 'Test todo' } });
  fireEvent.click(submitButton);

  // Check if the todo is added to the table after submitting the form
  const todoTableCell = screen.getByText(/test todo/i);
  expect(todoTableCell).toBeInTheDocument();

  // Check if the "Delete" button is rendered for the added todo
  const deleteButton = screen.getByRole('button', { name: /delete/i });
  expect(deleteButton).toBeInTheDocument();

  // Click on the "Delete" button to delete the todo
  fireEvent.click(deleteButton);

  // Check if the todo is removed from the table after deleting
  const todoTableCellAfterDelete = screen.queryByText(/test todo/i);
  expect(todoTableCellAfterDelete).not.toBeInTheDocument();
});
