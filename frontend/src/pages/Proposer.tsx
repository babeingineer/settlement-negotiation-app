import { Button, Divider, Input, Modal, Typography, notification } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { proposeAmount } from "~/actions";
import { useAppSelector } from "~/hooks/redux";
const { Title, Text } = Typography;

const Proposer = () => {
	const [_, messageboxContainer] = notification.useNotification();
	const [amount, setAmount] = useState(0);
	const [attentionDialogOpened, setAttentionDialogOpened] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const state = useAppSelector(s => s);
	const navigate = useNavigate();

	const handleCancel = () => {
		setIsEditing(false);
	}

	const handleAttentionDlgOK = () => {
		if (state.status === "approved")
			navigate("/agreement");
		else
			setAttentionDialogOpened(false);
	}

	const handleOk = () => {
		setIsEditing(false);
		proposeAmount(amount);
	}

	const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAmount(Number(e.target.value));
	}

	useEffect(() => {
		if (state.status === "approved") {
			if (isEditing)
				setAttentionDialogOpened(true);
			else
				navigate("/agreement")
		}
	}, [state.status, isEditing])

	return (
		<div className="w-full h-full flex justify-center items-center flex-col">
			{messageboxContainer}
			<Title>👋 Welcome Party A!</Title>
			<Divider />
			<Title level={3}>
				{
					state.amount !== undefined
						? `Submitted settlement amount: ${state.amount}`
						: "You haven't submitted amount yet"
				}
			</Title>
			{
				state.amount !== undefined && <Text>
					{state.status === "waiting" && "Waiting for the response from Party B"}
					{state.status === "rejected" && <Text type="danger">Party B rejected your request</Text>}
				</Text>
			}


			<Button type="primary" size="large" onClick={() => setIsEditing(true)} className="mt-24">
				{
					state.amount !== undefined
						? "Propose new Amount"
						: "Propose amount"
				}

			</Button>

			<Modal open={isEditing} onCancel={handleCancel} onOk={handleOk} okText="Submit">
				<Title level={3}>Propose settlement amount</Title>
				<Input autoFocus type="number" size="large" value={amount} onChange={handleAmountChange} />
			</Modal>

			<Modal open={attentionDialogOpened}
				footer={<Button onClick={handleAttentionDlgOK} type="primary">OK</Button>}
			>
				<Title level={3}>Attention</Title>
				<Text>Party B has {state.status} your previous suggestion</Text>
			</Modal>
		</div>
	);
};

export default Proposer;
