import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
  /* width: 80%; */
`;

const Heading = styled.h2`
  color: #1e90ff; /* Blue color */
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  /* width: 80%; */
  width: 60%;
  gap: 3rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  p {
    font-size: 16px;
    color: #333;
    text-align: center;
  }
`;

const data = [
  {
    id: 1,
    image: "fridge.png",
    name: "Appliance 1",
    details: "Details about Appliance 1...",
  },
  {
    id: 2,
    image: "fridge.png",
    name: "Appliance 2",
    details: "Details about Appliance 2...",
  },
  {
    id: 3,
    image: "fridge.png",
    name: "Appliance 3",
    details: "Details about Appliance 3...",
  },
  {
    id: 4,
    image: "fridge.png",
    name: "Appliance 4",
    details: "Details about Appliance 4...",
  },
  {
    id: 5,
    image: "fridge.png",
    name: "Appliance 5",
    details: "Details about Appliance 5...",
  },
  {
    id: 6,
    image: "fridge.png",
    name: "Appliance 6",
    details: "Details about Appliance 6...",
  },
  {
    id: 7,
    image: "fridge.png",
    name: "Appliance 7",
    details: "Details about Appliance 7...",
  },
  {
    id: 8,
    image: "fridge.png",
    name: "Appliance 8",
    details: "Details about Appliance 8...",
  },
  {
    id: 9,
    image: "fridge.png",
    name: "Appliance 9",
    details: "Details about Appliance 9...",
  },
  {
    id: 10,
    image: "fridge.png",
    name: "Appliance 10",
    details: "Details about Appliance 10...",
  },
  {
    id: 11,
    image: "fridge.png",
    name: "Appliance 11",
    details: "Details about Appliance 11...",
  },
  {
    id: 12,
    image: "fridge.png",
    name: "Appliance 12",
    details: "Details about Appliance 12...",
  },
  {
    id: 13,
    image: "fridge.png",
    name: "Appliance 13",
    details: "Details about Appliance 13...",
  },
  {
    id: 14,
    image: "fridge.png",
    name: "Appliance 14",
    details: "Details about Appliance 14...",
  },
  {
    id: 15,
    image: "fridge.png",
    name: "Appliance 15",
    details: "Details about Appliance 15...",
  },
];

const DeliveryDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <Container>
      <Heading>Delivery Details</Heading>
      <GridContainer>
        {data.map((item) => (
          <Card key={item.id} onClick={() => openModal(item)}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </Card>
        ))}
      </GridContainer>

      {selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </Container>
  );
};

export default DeliveryDetails;
