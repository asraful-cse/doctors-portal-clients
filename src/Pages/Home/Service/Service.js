import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
const Service = (props) => {
	const { name, description, img } = props.service;
	return (
		<Grid item xs={4} sm={4} md={4}>
			<Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
				<CardMedia
					component="img"
					style={{
						width: "auto",
						height: "80px",
						margin: "0 auto",
						marginTop: "40px",
					}}
					image={img}
					alt="green iguana"
				/>

				<CardContent>
					<Typography
						variant="h6"
						component="div"
						sx={{ marginBottom: "15px" }}
					>
						{name}
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						{description}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Service;
