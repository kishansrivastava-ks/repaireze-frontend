import styled from "styled-components";

const UnlockGuideContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 4rem 2rem;
  background: url("/kitchen.jpg") no-repeat center center/cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-align: left;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;

  justify-content: space-between;
  /* gap: 5rem; */
  min-width: 100%;
  max-width: 1200px;
  /* background-color: red; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  width: 60%;
  padding-right: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

const RightColumn = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    transform: rotate(10deg) scale(0.7);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const PreHeading = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-top: 2rem;

  input {
    flex: 1;
    padding: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px 0 0 4px;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1rem;
    background-color: #004080;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #003366;
    }
  }
`;

function UnlockGuide() {
  return (
    <UnlockGuideContainer>
      <Overlay />
      <ContentWrapper>
        <LeftColumn>
          <PreHeading>Appliance Insider Secrets</PreHeading>
          <h2>Unlock Your Ultimate Appliance Guide Now</h2>
          <p>
            Join a savvy community of 700,000+ appliance enthusiasts. Discover
            insider tips on choosing top brands, snagging unbeatable deals, and
            dodging costly mistakes. Transform your shopping experience with
            expert advice right at your fingertips.
          </p>
          <InputWrapper>
            <input type="email" placeholder="Email Address" />
            <button>UNLOCK MY GUIDE</button>
          </InputWrapper>
        </LeftColumn>
        <RightColumn>
          <img src="/kitchen.jpg" alt="Guide Illustration" />
        </RightColumn>
      </ContentWrapper>
    </UnlockGuideContainer>
  );
}

export default UnlockGuide;
