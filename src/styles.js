import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// NAVBAR
const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #3581b8;
`;

const Logo = styled(Link)`
  padding: 1rem 0;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  @media (max-width: 348px) {
    font-size: 1rem;
  }
`;

// NAVBAR

const Container = styled.div`
  /* CSS GRID */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense;
  padding: 1rem;
  text-align: center;
`;

const Card = styled.div`
  position: relative;
`;

const CardHeader = styled.div`
background-color: #3581b8;
color: #fff;
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  background-color: orange;
  border: none;
  display: block;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-color: #c44900;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export {
  Nav,
  Logo,
  Container,
  Image,
  Card,
  Button,
  CardHeader,
};
