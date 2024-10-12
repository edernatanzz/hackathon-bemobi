'use client';

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import home from "../assets/Home(1).png";
import msg from "../assets/Messages.png";
import calendar from '../assets/Frame.png';
import day from '../assets/Frame(1).png';
import others from '../assets/Library.png';


const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f8f9fa;
  padding: 10px 20px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconWrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export default function Footer() {
  const pathname = usePathname(); 

  const isActive = (path: string) => pathname === path;

  return (
    <FooterWrapper>
      <Link href="/" passHref>
        <IconWrapper active={isActive("/")}>
          <Image src={home} alt="Home" width={30} height={30} />
        </IconWrapper>
      </Link>
      <Link href="/teste" passHref>
        <IconWrapper active={isActive("/messages")}>
          <Image src={msg} alt="Messages" width={30} height={30} />
        </IconWrapper>
      </Link>
      <Link href="/teste" passHref>
        <IconWrapper active={isActive("/calendar")}>
          <Image src={calendar} alt="Calendar" width={30} height={30} />
        </IconWrapper>
      </Link>
      <Link href="/teste" passHref>
        <IconWrapper active={isActive("/day")}>
          <Image src={day} alt="Day" width={30} height={30} />
        </IconWrapper>
      </Link>
      <Link href="/teste" passHref>
        <IconWrapper active={isActive("/library")}>
          <Image src={others} alt="Library" width={30} height={30} />
        </IconWrapper>
      </Link>
    </FooterWrapper>
  );
}
