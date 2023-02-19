import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";

function Footer() {
  const data = useSelector((state) => state.products.items);

  const totalMoney = useSelector((state) => state.products.totalPrice);

  const spendingMoney = 418000000000 - totalMoney;

  console.log(data);

  return (
    <Card className="receipt">
      <ul>
        <h3>Your Receipt</h3>
        {data.map((item) =>
          item.count > 0 ? (
            <li style={{ listStyle: "none" }}>
              {item.name} x {item.count} = {item.count * item.price} $
            </li>
          ) : null
        )}
      </ul>
      <hr></hr>
      <h3> total = {spendingMoney} $</h3>
    </Card>
  );
}

export default Footer;
