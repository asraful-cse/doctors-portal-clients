import * as React from "react";
import Appointments from "../Appointments/Appointments";
import Calendar from "../../Shared/Calendar/Calendar";
import { Grid } from "@mui/material";
const DashboardHome = () => {
	const [date, setDate] = React.useState(new Date());
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={6} sm={6}>
				<Calendar date={date} setDate={setDate}></Calendar>
			</Grid>
			<Grid item xs={12} md={6} sm={6}>
				<Appointments date={date}></Appointments>
			</Grid>
		</Grid>
	);
};

export default DashboardHome;
