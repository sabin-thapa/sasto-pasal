import { Col, Container, Row, Stack } from "react-bootstrap";

const aboutItems = [
  {
    id: 1,
    name: "ReactJS",
    imgUrl: "/images/about/react.png",
  },
  {
    id: 2,
    name: "TypeScript",
    imgUrl: "/images/about/typescript.png",
  },
  {
    id: 3,
    name: "React Bootstrap",
    imgUrl: "/images/about/rb.png",
  },
  {
    id: 4,
    name: "Context API",
    imgUrl: "/images/about/context.jpg",
  },
];

export const About = () => {
  return (
    <div>
      <p style={{ paddingTop: "2rem" }}>
        Hamro Pasal is a simple store(e-commerce application) built using the
        following:
      </p>
      <Container style={{ marginTop: "10rem" }}>
        <Row className="text-center">
          <Col md>
            {aboutItems.map((item) => (
              <img
                src={item.imgUrl}
                height="200px"
                width="300px"
                style={{ objectFit: "contain" }}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
