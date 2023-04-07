import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import AccountMenu from './components/AccountMenu';
import BasicForm from './components/BasicForm';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const DataTable = ({ data, onDelete }) => {
	return (
		<div>
			<Typography variant="h4">Todo Table</Typography>
			<Table>
				<TableBody>
					{data.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{row.todo}</TableCell>
							<TableCell>
								<Button
									color="secondary"
									onClick={() => onDelete(index)}
								>
									Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const [formData, setFormData] = React.useState([]);

	const handleOnClick = () => {
		console.log('open');
		if (!openForm) {
			setOpenForm(true);
		} else {
			setOpenForm(false);
		}
	};

	const handleDelete = (index) => {
		// Create a copy of the formData array
		const updatedFormData = [...formData];
		// Remove the item at the specified index
		updatedFormData.splice(index, 1);
		// Update the formData state with the updated array
		setFormData(updatedFormData);
	};

	const handleSubmit = (values) => {
		setFormData([...formData, values]);
	};

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Container maxWidth="sm">
							<AccountMenu onClick={handleOnClick} />
							{openForm && <BasicForm onSubmit={handleSubmit} />}
							{formData.length > 0 && (
								<DataTable data={formData} onDelete={handleDelete} />
							)}
						</Container>
					}
				/>
			</Routes>
		</Router>
	);
}
