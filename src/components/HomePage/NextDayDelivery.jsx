import styled from "styled-components";
import deliveryImage from "/kitchen.jpg";

const NextDayDeliveryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #002e5d, #004b8e);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 70vw;
  margin: 5rem auto;
  height: 20vh;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90vw;
    text-align: center;
  }
`;

const HeadingColumn = styled.div`
  flex: 1;
  padding-right: 1rem;

  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.2;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 1rem;
  }
`;

const ButtonColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: #ffbf00;
    color: #002e5d;
    font-weight: bold;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ffa500;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const TextColumn = styled.div`
  flex: 2;
  font-size: 1rem;
  padding-right: 1rem;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 1rem;
  }
`;

const ImageColumn = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    transform: rotate(5deg);
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const Image = styled.img`
  position: absolute;
  /* top: 0; */
  right: 5%;
  z-index: 5;
  width: 25rem;
  transform: rotate(5deg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

function NextDayDelivery() {
  return (
    <NextDayDeliveryContainer>
      <HeadingColumn>
        <h2>Next-day Delivery</h2>
        <p>In-stock products ready for delivery</p>
      </HeadingColumn>
      <ButtonColumn>
        <button>Need it fast? Shop now!</button>
      </ButtonColumn>
      <TextColumn>
        We guarantee next-day delivery on in‑stock products.
      </TextColumn>
      <ImageColumn>
        <Image src={deliveryImage} alt="Next-day delivery" />
      </ImageColumn>
    </NextDayDeliveryContainer>
  );
}

export default NextDayDelivery;
