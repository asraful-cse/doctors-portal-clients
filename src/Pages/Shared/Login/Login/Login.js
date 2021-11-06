import { Container, Grid, TextField, Button } from "@mui/material";
import React from "react";
import login from "../../../../images/login.png";
const Login = () => {
    const handleSubmitted = e =>{
        e.preventDefault();
    }
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<form onSubmit={}>
						<TextField
							sx={{ width: "75%" }}
							id="standard-basic"
							type="email"
							label="Your email"
							variant="standard"
						/>
						<TextField
							sx={{ width: "75%" }}
							id="standard-basic"
							type="password"
							label="Your Password"
							variant="standard"
						/>
						
					</form>
                    <Button type="submit" variant="contained">
							Submit
						</Button>
				</Grid>

				<Grid item xs={12} md={6}>
					<img style={{ width: "100%" }} src={login} alt="" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;
