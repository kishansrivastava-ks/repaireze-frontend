import styled from "styled-components";

// Icons
import { FaMapMarkerAlt, FaClock, FaHome, FaTruck } from "react-icons/fa";

// Container for the entire section
const Section = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  text-align: center;
`;

// Main heading
const MainHeading = styled.h1`
  color: #0044cc;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

// Subheading
const SubHeading = styled.p`
  color: #333;
  font-size: 1.2em;
  margin-bottom: 30px;
`;

// Container for the boxes
const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

// Individual box
const Box = styled.div`
  background-color: white;
  border-radius: 0 15px 0 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 22%;
  min-width: 150px;
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

// Icon in the box
const Icon = styled.div`
  background-color: #0044cc;
  color: white;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 10px;
  display: inline-block;
`;

// Box text
const BoxText = styled.p`
  font-size: 0.9em;
  color: #333;
`;

// Footer text
const FooterText = styled.p`
  color: #666;
  font-size: 0.9em;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const GNDDSection = () => {
  return (
    <Section>
      <MainHeading>Guaranteed Next Day Delivery</MainHeading>
      <SubHeading>
        Need it fast? We deliver in-stock products same-day or next-day.
        Available to select zip codes online.
      </SubHeading>
      <BoxesContainer>
        <Box>
          <Icon>
            <FaMapMarkerAlt size={24} />
          </Icon>
          <BoxText>
            Most cities and towns around our Framingham, Hanover and Dorchester
            showrooms, Norton operations center, and the Cape are eligible.
          </BoxText>
        </Box>
        <Box>
          <Icon>
            <FaClock size={24} />
          </Icon>
          <BoxText>
            Available on sales between Monday - Friday before 12:45 PM.
          </BoxText>
        </Box>
        <Box>
          <Icon>
            <FaHome size={24} />
          </Icon>
          <BoxText>
            Includes product brought into the home, removal of the old product
            and all packaging.
          </BoxText>
        </Box>
        <Box>
          <Icon>
            <FaTruck size={24} />
          </Icon>
          <BoxText>
            Based on our Monday-Saturday delivery schedule. Holidays, poor
            weather, and other restrictions apply.
          </BoxText>
        </Box>
      </BoxesContainer>
      <FooterText>
        Same Day delivery is available for an additional charge. Applies to
        in-stock products and select zip codes if purchased before 12:45 PM
        Monday - Friday. Next Day installation is not available. Call the stores
        for details.
      </FooterText>
    </Section>
  );
};

export default GNDDSection;
