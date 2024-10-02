import { useState } from "react";
import styled from "styled-components";

const WhyRepaireze = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <SectionContainer>
      <LeftColumn>
        <SmallHeading>WHY REPAIREZE?</SmallHeading>
        <MainHeading>Appliance Shopping Made Easy</MainHeading>
        <Description>
          Shopping for new appliances is more stressful and overwhelming than it
          should be. That’s why Yale doesn’t just sell you an appliance. Unlike
          other stores, we also deliver, install, and service. So, you can sit
          back, relax, and enjoy your beautiful kitchen for years to come.
        </Description>
        <YellowButton>SCHEDULE A SHOWROOM VISIT</YellowButton>
      </LeftColumn>
      <RightColumn>
        <VideoThumbnail onClick={openModal}>
          <PlayButton>&#9658;</PlayButton>
        </VideoThumbnail>
        {isModalOpen && (
          <Modal onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <VideoPlayer controls>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </VideoPlayer>
            </ModalContent>
          </Modal>
        )}
      </RightColumn>
    </SectionContainer>
  );
};

export default WhyRepaireze;

// Styled Components

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem 8rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  /* border: 2px solid red; */
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SmallHeading = styled.h3`
  font-size: 2rem;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const MainHeading = styled.h2`
  font-size: 3.5rem;
  color: #007bff; /* Blue color */
  font-weight: bold;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const YellowButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: #ffcc00;
  color: black;
  border: none;
  font-size: 1.5rem;
  /* font-weight: bold; */
  letter-spacing: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #e6b800;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const VideoThumbnail = styled.div`
  width: 100%;
  max-width: 400px;
  height: 250px;
  background-image: url("/thumbnail.png");
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffcc00;
  color: white;
  font-size: 3rem;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6b800;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
  background-color: black;
`;
