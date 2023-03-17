import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Subscribe } from "../redux/slice/subscribe";

export default () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId == null || userId == undefined || userId == "") {
      navigate("/");
    }
  }, []);
  const price = [100, 150, 200];
  const type = ["Lite", "Pro", "Ultimate"];
  const dispatch = useDispatch();
  const handleSubscribe = (price,type) => {
    const userId = localStorage.getItem("userId");
    const subscriptionType = type;
    const subscriptionPrice = price;
    dispatch(Subscribe({ userId, subscriptionPrice, subscriptionType }));
  };
  return (
    <div>
      <div>
        <p>100</p>
        <p>Lite</p>
        <button onClick={() => handleSubscribe(100,"Lite")}>Subscribe</button>
      </div>
      <div>
        <p>150</p>
        <p>Pro</p>
        <button onClick={() => handleSubscribe(150,"Pro")}>Subscribe</button>
      </div>
      <div>
        <p>200</p>
        <p>Ultimate</p>
        <button onClick={() => handleSubscribe(200,"Ultimate")}>Subscribe</button>
      </div>
    </div>
  );
};
