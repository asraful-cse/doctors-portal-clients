import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const Appointments = ({ date }) => {
	const { user } = useAuth();
	const [appointments, setAppointments] = useState([]);
	useEffect(() => {
		const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setAppointments(data));
	}, [date]);
	return (
		<div>
			<h2>Appointments: {appointments.length}</h2>
			<TableContainer component={Paper}>
				<Table sx={{}} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Service</TableCell>
							<TableCell align="right">Time</TableCell>
							<TableCell align="right">Email</TableCell>
							<TableCell align="right">Phone</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{appointments.map((row) => (
							<TableRow
								key={row._id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								style={{ fontSize: "11px" }}
							>
								<TableCell
									style={{ fontSize: "11px" }}
									component="th"
									scope="row"
								>
									{row.patientName}
								</TableCell>
								<TableCell style={{ fontSize: "11px" }} align="right">
									{row.serviceName}
								</TableCell>
								<TableCell style={{ fontSize: "11px" }} align="right">
									{row.time}
								</TableCell>
								<TableCell style={{ fontSize: "11px" }} align="right">
									{row.email}
								</TableCell>
								<TableCell style={{ fontSize: "11px" }} align="right">
									{row.phone}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Appointments;
