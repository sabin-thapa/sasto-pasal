import Carousel from "react-bootstrap/Carousel";
export const Home = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/laptop.jpg"
          alt="Laptop"
          style={{ height: "750px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Macbook Pro</h3>
          <p>Could it be any slimmer?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/bike.jpg"
          alt="Bike"
          style={{ height: "750px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>Royal Enfield</h3>
          <p>Made like a gun, goes like a bullet.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/phone.jpg"
          alt="Phone"
          style={{ height: "750px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>Phone</h3>
          <p>Brand new iPhone with epic camera.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/chanel.jpg"
          alt="Chanel Perfume"
          style={{ height: "750px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h3>Chanel Perfume</h3>
          <p>Ever lasting smell.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
