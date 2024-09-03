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
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
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

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const VideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.25%; // 16:9 aspect ratio
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const WhatItIncludes = () => {
  return (
    <SectionContainer>
      <Heading>All Yale Deliveries Include...</Heading>
      <ContentContainer>
        <LeftColumn>
          <List>
            <ListItem>
              <CheckIcon />
              2-Hour Delivery Windows (with an automatic call ahead the day of
              delivery upon completion of the previous stop)
            </ListItem>
            <ListItem>
              <CheckIcon />
              30-min or 1-hour additional call ahead upon request
            </ListItem>
            <ListItem>
              <CheckIcon />
              Track the truck online to your home within 30 minutes of delivery
            </ListItem>
            <ListItem>
              <CheckIcon />
              Delivery includes stairs to the second floor
            </ListItem>
            <ListItem>
              <CheckIcon />
              Removal of old, disconnected appliances (one for one), unless
              purchasing Yale installation separately
            </ListItem>
            <ListItem>
              <CheckIcon />
              Disposal of refrigerator compressor ($20 value)
            </ListItem>
            <ListItem>
              <CheckIcon />
              Removal of all product packaging and boxes
            </ListItem>
            <ListItem>
              <CheckIcon />
              Leak Detection Paper (refrigerators and dishwashers)
            </ListItem>
            <ListItem>
              <CheckIcon />
              Connection of freestanding electric ranges, electric dryers, and
              freestanding refrigerators to existing fittings
            </ListItem>
            <ListItem>
              <CheckIcon />
              Masonite sheets left under appliance to protect your floors from
              scratches & dents
            </ListItem>
            <ListItem>
              <CheckIcon />
              Photos & videos for quality assurance on all deliveries for your
              protection
            </ListItem>
            <ListItem>
              <CheckIcon />
              Every Yale Driver, Installer & Service Tech is drug tested and has
              a CORI (Criminal Offender Record Information) check
            </ListItem>
          </List>
          <Paragraph>
            We charge $199.99 for multiple deliveries to your home, which can
            include as many items as you wish for the same flat fee. Includes
            delivery up to the second floor at no extra charge.
          </Paragraph>
          <Paragraph>
            Don’t need multiple deliveries? Our team can discuss options when
            confirming your order.
          </Paragraph>
        </LeftColumn>
        <RightColumn>
          <VideoFrame>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Delivery Video"
            ></iframe>
          </VideoFrame>
        </RightColumn>
      </ContentContainer>
    </SectionContainer>
  );
};

export default WhatItIncludes;
