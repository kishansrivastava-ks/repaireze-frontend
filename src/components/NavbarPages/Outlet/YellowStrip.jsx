import styled from "styled-components";

const YellowStripSection = styled.section`
  width: 100%;
  background-color: #f9c74f; /* Golden yellow background */
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #007bff; /* Bold blue color */
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  color: #007bff; /* Blue color for subheading */
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const YellowStrip = () => {
  return (
    <YellowStripSection>
      <Heading>
        The Yale Outlet is back open to the public for visits at our Norton
        Showroom.
      </Heading>
      <SubHeading>
        The Yale Outlet is back open to the public for in-store visits at our
        new Norton location. You can also still view and purchase our outlet
        models on our website. If you are interested in an outlet product on our
        website, please contact our sales team for additional information and
        purchase options.
      </SubHeading>
      <ButtonContainer>
        <Button>EXPLORE NOW</Button>
        <Button>CONTACT US</Button>
      </ButtonContainer>
    </YellowStripSection>
  );
};

export default YellowStrip;
