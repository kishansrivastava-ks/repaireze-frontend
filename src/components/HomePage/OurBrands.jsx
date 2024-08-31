import styled from "styled-components";

// Styled Components
const OurBrandsContainer = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  h2 {
    color: #002e5d;
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  button {
    background-color: #002e5d;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #004b8e;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    button {
      margin-top: 1rem;
    }
  }
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .item-text {
    margin-top: 1rem;
    border-top: 1px solid #ddd;
    padding-top: 0.5rem;
    color: #333;
    font-size: 1rem;
  }
`;

// Our Brands Component
function OurBrands() {
  const brands = [
    {
      name: "Brand 1",
      image: "https://via.placeholder.com/150",
      discount: "Save up to $250",
    },
    {
      name: "Brand 2",
      image: "https://via.placeholder.com/150",
      discount: "Save up to $200",
    },
    {
      name: "Brand 3",
      image: "https://via.placeholder.com/150",
      discount: "Save up to $300",
    },
    {
      name: "Brand 4",
      image: "https://via.placeholder.com/150",
      discount: "Save up to $150",
    },
    {
      name: "Brand 5",
      image: "https://via.placeholder.com/150",
      discount: "Save up to $100",
    },
    {
      name: "Brand 6",
      image: "https://via.placeholder.com/150",
      discount: "Save up to $350",
    },
    {
      name: "Brand 7",
      image: "https://via.placeholder.com/150",
      discount: "Save up to $400",
    },
    {
      name: "Brand 8",
      image: "https://via.placeholder.com/150",
      discount: "Save up to $250",
    },
  ];

  return (
    <OurBrandsContainer>
      <Header>
        <h2>Our Brands</h2>
        <p>Save with deals from the best brands</p>
        <button>SEE ALL BRANDS</button>
      </Header>
      <Body>
        {brands.map((brand, index) => (
          <GridItem key={index}>
            <img src={brand.image} alt={brand.name} />
            <div className="item-text">{brand.discount}</div>
          </GridItem>
        ))}
      </Body>
    </OurBrandsContainer>
  );
}

export default OurBrands;
