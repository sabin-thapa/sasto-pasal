import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/CartContext";
import { currencyFormatter } from "../utils/currencyFormatter";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{currencyFormatter(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {!quantity ? (
            <Button
              variant="outline-success"
              className="w-100"
              onClick={() => increaseCartQuantity(id)}
            >
              {" "}
              + Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  variant="outline-success"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  {" "}
                  -{" "}
                </Button>
                <div>
                  <span className="fs-3"> {quantity} </span> items in cart.
                </div>
                <Button
                  variant="outline-success"
                  onClick={() => increaseCartQuantity(id)}
                >
                  {" "}
                  +
                </Button>
              </div>
              <Button
                variant="light"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                <svg
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    fill="red"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    fill="red"
                  ></path>{" "}
                </svg>
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
