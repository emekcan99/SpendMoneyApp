import { Card } from "antd";
import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";

function Heading() {
    const totalPrice = useSelector((state) => state.products.totalPrice)
    //console.log(totalPrice);
  return (
    <Card className="heading">
        <h2>spend turks' taxes</h2>
      <img
        src="https://galeri13.uludagsozluk.com/697/en-tatli-sabahlar-recep-tayyip-erdogan-la-baslar_1013535.jpg"
        className="image"
        alt="hünkarımız"
      ></img>
      <br></br>
      <h2>{totalPrice} - $</h2>
    </Card>
  );
}

export default Heading;
