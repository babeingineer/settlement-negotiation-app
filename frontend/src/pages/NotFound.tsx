import { Button } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <Title className="text-center">
        Page not found
      </Title>

      <div className="text-center">
        <Button onClick={goBack}>Go back</Button>
      </div>
    </>
  )
}