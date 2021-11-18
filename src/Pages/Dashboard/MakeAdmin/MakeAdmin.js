import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
	const [success, setSuccess] = useState(false);
	const [email, setEmail] = useState();
	const { token } = useAuth();
	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};
	const handleAdminSubmit = (e) => {
		const user = { email };
		fetch('http://localhost:5000/users/admin', {
			method: "PUT",
			headers: {
				'authorization': `Bearer ${token}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					console.log(data);
					setEmail("");
					setSuccess(true);
				}
			});
		e.preventDefault();
	};
	return (
		<div>
			<h2>Make a Admin: </h2>
			<form onSubmit={handleAdminSubmit}>
				<TextField
					sx={{ width: "50%" }}
					label="email"
					variant="standard"
					onBlur={handleOnBlur}
				/>

				<Button type="submit" variant="contained">
					Make Admin
				</Button>
			</form>
			{success && (
				<Alert
					// style={{ width: "50%", margin: "1", marginLeft: "125px" }}
					severity="success"
					color="info"
				>
					Made Admin Successfully
				</Alert>
			)}
		</div>
	);
};

export default MakeAdmin;
