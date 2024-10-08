import styled from "styled-components";
import Benefits from "../components/NavbarPages/Financing/Benefits";
import Faq from "../components/NavbarPages/NextDayDelivery/Faq";

const InfoSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.div`
  flex: 1;
  background-image: url("/kitchen2.png");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CenterContent = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
`;
// const CenterText = styled.h1`
//   color: white;
//   font-size: 3rem;
//   text-align: center;
//   z-index: 1;
//   line-height: 1.2;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled.p`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  max-width: 600px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 80%;
  }
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  background-color: #d4af37; /* Light golden yellow */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c19a28;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function Financing() {
  return (
    <>
      <InfoSection>
        <BackgroundImage>
          <Overlay />
          <CenterContent>
            <MainHeading>The All-New Yale Card</MainHeading>
            <SubHeading>
              The Yale Card gives you exclusive benefits like 12 Months Special
              Financing1, 10% off Yale Outlet, and much more.
            </SubHeading>
            <Button>START NOW</Button>
          </CenterContent>
        </BackgroundImage>
      </InfoSection>
      <Benefits />
      <Faq />
    </>
  );
}

export default Financing;
