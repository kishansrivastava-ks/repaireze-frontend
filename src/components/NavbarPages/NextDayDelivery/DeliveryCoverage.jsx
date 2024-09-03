import { useState, useEffect } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
`;

const RightColumn = styled.div`
  flex: 1;
  position: relative;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: blue;
  text-align: center;
`;

const SubHeading = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: all 0.2s ease;

  &:focus::placeholder {
    font-size: 12px;
    position: absolute;
    top: -20px;
    left: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkblue;
  }
`;

const containerStyle = {
  width: "100%",
  height: "100%",
};

const DeliveryCoverage = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => console.error(error)
    );
  }, []);

  return (
    <Container>
      <LeftColumn>
        <Heading>Delivery Coverage</Heading>
        <SubHeading>
          We deliver from Worcester to the Cape, Southern New Hampshire to Rhode
          Island. Enter your zip code below to see if we deliver to your area.
        </SubHeading>
        <div>
          <Input placeholder="Zip Code" />
          <Button>Check Now</Button>
        </div>
      </LeftColumn>
      <RightColumn>
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          {location && (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={12}
            >
              <Marker position={location} />
            </GoogleMap>
          )}
        </LoadScript>
      </RightColumn>
    </Container>
  );
};

export default DeliveryCoverage;
