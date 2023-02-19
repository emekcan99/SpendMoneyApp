import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Card, Col, Row, Image, Button } from "antd";
import "./styles.css";
import { buyProduct, sellProduct } from "../../redux/products/productsSlice";


function Store() {
  const store = useSelector((state) => state.products.items);

  const dispatch = useDispatch()


  return (
    <Row gutter={[20, 20]} className="store">
      {store.map((item) => (
        <Col
          xs={{ span: 5, offset: 2 }}
          lg={{ span: 5, offset: 2 }}
          key={item.id}
        >
          <Card
            key={item.id}
            className="Card"
            title={`${item.name} - ${item.price} $`}

          >
            <Button className="Button-2" type="custom" onClick={()=> dispatch(sellProduct(item))}>
              Sell
            </Button>
            <input
              type="number"
              className="numberbox"
              placeholder={item.count}
            ></input>
            <Button
              className="Button"
              type="green"
              onClick={() => dispatch(buyProduct(item))}
            >
              Buy
            </Button>

            <br></br>
            <br></br>

            <Image src={item.link}></Image>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Store;
