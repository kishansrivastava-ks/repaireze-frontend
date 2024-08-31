import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";

const ShowroomsSection = styled.section`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f9f9f9;

  h2 {
    color: #004080;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  button {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    color: white;
    background-color: #004080;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #003366;
    }
  }
`;

const ShowroomCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const ShowroomCard = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background: url(${(props) => props.bgImage}) no-repeat center center/cover;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  &:hover .overlay {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:hover .showroom-info {
    transform: translateY(-30%);
  }

  &:hover .showroom-button {
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ShowroomInfo = styled.div`
  text-align: center;
  z-index: 2;
  transition: transform 0.3s ease;
`;

const GoogleStrip = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  .google-icon {
    margin-right: 0.5rem;
  }
`;

const ShowroomButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.75rem;
  background-color: #004080;
  color: white;
  border: none;
  transform: translateY(100%);
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #003366;
  }
`;

function Showrooms() {
  return (
    <ShowroomsSection>
      <h2>Looking For A Customized Personal Experience?</h2>
      <p>
        Schedule a visit with a Yale team member to truly understand all your
        options.
      </p>
      <button>SCHEDULE A SHOWROOM VISIT</button>

      <ShowroomCards>
        {["Boston", "Cambridge", "Worcester", "Providence"].map((city) => (
          <ShowroomCard key={city} bgImage="/kitchen.jpg">
            <Overlay className="overlay">
              <ShowroomInfo className="showroom-info">
                <h3>Explore Our {city} Showroom</h3>
              </ShowroomInfo>
              <GoogleStrip className="google-strip">
                <FaGoogle className="google-icon" />
                <span>4.9/5</span>
                <span>&nbsp;&bull;&nbsp;8153 reviews</span>
              </GoogleStrip>
              <ShowroomButton className="showroom-button">
                Take the showroom tour
              </ShowroomButton>
            </Overlay>
          </ShowroomCard>
        ))}
      </ShowroomCards>
    </ShowroomsSection>
  );
}

export default Showrooms;
