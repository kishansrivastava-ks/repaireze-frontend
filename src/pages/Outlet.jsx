import styled from "styled-components";
import Faq from "../components/NavbarPages/NextDayDelivery/Faq";
import YellowStrip from "../components/NavbarPages/Outlet/YellowStrip";
import Slider from "../components/NavbarPages/Outlet/Slider";
import FeaturedCloseouts from "../components/NavbarPages/Outlet/FeaturedCloseouts";

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

function Outlet() {
  return (
    <>
      <InfoSection>
        <BackgroundImage>
          <Overlay />
          <CenterContent>
            <MainHeading>
              Save Up To 60%
              <br /> On Top Name Brand Appliances
            </MainHeading>
            <SubHeading>
              Hundreds of floor displays, scratch & dent, discontinued and
              overstocked items ready to take home
            </SubHeading>
            <Button>EXPLORE NOW</Button>
          </CenterContent>
        </BackgroundImage>
      </InfoSection>
      <YellowStrip />
      <Slider />
      <FeaturedCloseouts />
      <Faq />
    </>
  );
}

export default Outlet;
