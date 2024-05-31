import { Button, Divider, Typography, notification } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { approveAmount, rejectAmount } from "~/actions";
import { useAppSelector } from "~/hooks/redux";
const { Title, Text } = Typography;

const Responder = () => {
	const [_, messageboxContainer] = notification.useNotification();
	const state = useAppSelector(s => s);
	const navigate = useNavigate();

	const onApprove = () => {
		approveAmount();
	}

	const onReject = () => {
		rejectAmount();
	}

	useEffect(() => {
		if (state.status === "approved") {
			navigate("/agreement");
		}
	}, [state.status])


	return (
		<div className="w-full h-full flex justify-center items-center flex-col">
			{messageboxContainer}
			<Title>👋 Welcome Party B!</Title>
			<Divider />
			<Title level={3}>
				{
					state.amount !== undefined
						? `Requested settlement amount: ${state.amount}`
						: "Party A hasn't submitted amount yet"
				}
			</Title>
			{
				state.amount !== undefined && <Text>
					{state.status === "waiting" && "Party A is waiting for your response"}
					{state.status === "rejected" && <Text type="danger">You rejected the request</Text>}
				</Text>
			}

			{
				state.amount !== undefined && <div className="inline-flex gap-4 mt-24">
					<Button type="primary" size="large" onClick={onApprove} disabled={state.status !== "waiting"}>Approve</Button>
					<Button type="primary" size="large" danger onClick={onReject} disabled={state.status !== "waiting"}>Reject</Button>
				</div>
			}
		</div>
	);
};

export default Responder;
