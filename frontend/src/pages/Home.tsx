import { Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="w-full h-full flex justify-center items-center flex-row gap-4">
			<Link to="/proposer">
				<Button size="large">Join as Party A (Proposer)</Button>
			</Link>

			<Link to="/responder">
				<Button size="large">Join as Party B (Responder)</Button>
			</Link>
		</div>
	);
};

export default Home;
