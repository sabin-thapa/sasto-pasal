import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export const Store = () => {
  return (
    <>
      <h1> Online Pasal</h1>
      <Row className="g-3" md="2" lg="3" xs="1">
        {storeItems.map((item) => (
          <Col key={item.id}>
            {" "}
            <StoreItem {...item} />{" "}
          </Col>
        ))}
      </Row>
    </>
  );
};
