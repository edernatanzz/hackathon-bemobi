'use client';

import styled from "styled-components";
import Image from "next/image";
import logo from '../assets/Titulo(2).png';
import not from '../assets/Notificações.png';
import search from '../assets/Pesquisar.png';

const Container = styled.header`
  padding: 1rem 1rem;
  border-bottom: 1px solid #ccc;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between; 
  align-items: center;
`;

const Logo = styled.div`
  
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;



const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
`;

export default function TagHeader() {
  return (
    <Container>
      <Nav>
       

      <Logo>
          <Image src={logo} alt="Logo" width={120} height={50} />
        </Logo>
        <Profile>
          <Image src={not} alt="Notificações" width={30} height={30} />
          <Image src={search} alt="Pesquisar" width={30} height={30} />
          <ProfileIcon />
        </Profile>

      </Nav>
    </Container>
  );
}
