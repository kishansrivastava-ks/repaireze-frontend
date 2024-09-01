import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MainBody = styled.main`
  flex: 1;
  /* padding: 2rem; */
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// const Footer = styled.footer`
//   background-color: #333;
//   color: white;
//   padding: 1rem;
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 0.75rem;
//   }
// `;

function AppLayout() {
  return (
    <Layout>
      {/* <NavBar>
        <h1>My Website</h1>
      </NavBar> */}
      <Navbar />

      <MainBody>
        <Outlet />
      </MainBody>

      {/* <Footer>
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </Footer> */}
      <Footer />
    </Layout>
  );
}

export default AppLayout;
