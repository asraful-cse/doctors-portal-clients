import React from "react";
import Services from "../Services/Services";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
// import Footer from "../../Shared/Footer/Footer";

const Home = () => {
	return (
		<div>
			<Navigation></Navigation>
			<Banner></Banner>
			<Services></Services>
			<AppointmentBanner></AppointmentBanner>
			{/* <Footer></Footer> */}
		</div>
	);
};

export default Home;
