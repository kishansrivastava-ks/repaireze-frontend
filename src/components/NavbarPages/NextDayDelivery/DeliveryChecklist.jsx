import styled from "styled-components";

import checklistImage from "/kitchen.jpg";

const Section = styled.section`
  background-color: #f8b400;
  color: white;
  padding: 40px 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 30px 5%;
    flex-direction: column;
    text-align: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const Heading = styled.h1`
  color: #0044cc;
  font-size: 2em;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #0044cc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0033aa;
    transform: scale(1.05);
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Image
const Image = styled.img`
  max-width: 100%;
  height: auto;
  transform: rotate(3deg) scale(0.6);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const DeliveryChecklist = () => {
  return (
    <Section>
      <ContentContainer>
        <LeftColumn>
          <Heading>Free Appliance Delivery Checklist</Heading>
          <SubHeading>
            Consult our Delivery Checklist to understand all the possible
            pitfalls of home appliance delivery, before you buy from us or
            anyone else.
          </SubHeading>
          <Button>Get Your Copy</Button>
        </LeftColumn>
        <RightColumn>
          <Image src={checklistImage} alt="Delivery Checklist" />
        </RightColumn>
      </ContentContainer>
    </Section>
  );
};

export default DeliveryChecklist;
