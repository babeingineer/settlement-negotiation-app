import { Button } from "antd";
import Title from "antd/es/typography/Title";
import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router";
import { initializeState } from "~/actions";
import { useAppSelector } from "~/hooks/redux";

const Agreement = () => {
	const amount = useAppSelector(state => state.amount);
	const navigate = useNavigate();

	const onStartOver = () => {
		navigate("/");
		initializeState();
	}

	return (
		<div className="w-full h-full flex justify-center items-center flex-col gap-4">
			<ReactConfetti recycle={false} />
			<Title>
				🎉 Hurray!
			</Title>
			<Title level={2}>
				You agreed at {amount}
			</Title>
			<Button onClick={onStartOver}>Start over</Button>
		</div>
	);
};

export default Agreement;
