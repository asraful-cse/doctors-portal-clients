import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
	const { user, logOut } = useAuth();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						DOCTORS PORTAL
					</Typography>
					<Link
						style={{ textDecoration: "none", color: "white" }}
						to="/appointments"
					>
						<Button color="inherit">Appointments</Button>
					</Link>

					{user?.email ? (
						<Box>
							<NavLink
								style={{ textDecoration: "none", color: "white" }}
								to="/Dashboard"
							>
								<Button color="inherit">Dashboard</Button>
							</NavLink>
							<Button
								style={{ textDecoration: "none", color: "white" }}
								onClick={logOut}
								color="inherit"
							>
								Logout
							</Button>
							<small
								style={{
									textDecoration: "none",
									color: "rgb(155 255 135 / 95%)",
									border: "1px solid #761a38ab",
									padding: "6px",
									backgroundColor: "#233e58ad",
									borderRadius: "10px",
								}}
								color="inherit"
							>
								{user.displayName}
							</small>
						</Box>
					) : (
						<NavLink
							style={{ textDecoration: "none", color: "white" }}
							to="/login"
						>
							<Button color="inherit">Login</Button>
						</NavLink>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navigation;
