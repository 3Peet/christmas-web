import Celebrate from "../components/Celebrate";
import Gift from "../components/Gift";
import Giving from "../components/Giving";
import Header from "../components/Header";
import Homepage from "../components/Home";
import New from "../components/New";
import Message from "../components/Message";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";

export default function Home() {
	return (
		<>
			<Header></Header>
			<Homepage></Homepage>
			<Giving></Giving>
			<Celebrate></Celebrate>
			<Gift></Gift>
			<New></New>
			<Message></Message>
			<Footer></Footer>
			<ScrollUp></ScrollUp>
		</>
	);
}
