import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const SectionContainer = styled.section`
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Heading = styled.h2`
  font-size: 3.5rem;
  color: #007bff; /* Bold blue color */
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: left;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CheckIcon = styled(FaCheck)`
  color: green;
  margin-right: 0.5rem;
`;

// const Paragraph = styled.p`
//   font-size: 1rem;
//   color: #555;
//   margin: 1rem 0;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }
// `;

const ImageFrame = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;
const Button = styled.button`
  padding: 5px 10px;
  border-color: darkblue;
  background-color: #5e5ed8;
  color: #fff;
  outline: none;
  border: none;
  &:hover {
    background-color: #2f2fca;
  }
`;

const Benefits = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <LeftColumn>
          <Heading>Benefits</Heading>
          <List>
            <ListItem>
              <CheckIcon />
              12 Months Special Financing: Buy today, pay over time with
              convenient monthly payments for your purchase.
            </ListItem>
            <ListItem>
              <CheckIcon />
              10% Off Outlet Products: The Outlet in our Boston showroom is
              routinely stocked with clearance and discontinued products.
              You&apos;ll save 10% off all Outlet purchases with the Yale Card.
            </ListItem>
            <ListItem>
              <CheckIcon />
              10% Off In-Stock Yale Essentials: Save on these Yale favorites
              like vacuums, small appliances, cookware, kitchen sinks, and more.
            </ListItem>
            <ListItem>
              <CheckIcon />
              Early Admission to Warehouse Clearances: Yale Card members skip
              the line at our (very) popular Tent Sale and warehouse clearances.
              In fact, we&apos;ll open early just for you and other card
              members. You can easily save 60% at one of these sales.
            </ListItem>
          </List>
          <Button>START NOW</Button>
        </LeftColumn>
        <RightColumn>
          <ImageFrame>
            <img src="/credit-card.png" alt="Credit Card" />
          </ImageFrame>
        </RightColumn>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Benefits;
