"use client"; // Certifique-se de adicionar no topo do arquivo

import Assinaturas from "@/components/homeAssinaturas";
import React from "react";
import styled from "styled-components";
import Image from 'next/image';  
import './css.css';
import calendario from '../../assets/Calendário.png';
import boton from '../../assets/Botão Pontos.png';
import line from '../../assets/Line 14.png';
import text from '../../assets/BeCoins.png';
import lvl from '../../assets/Infos.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;  
  align-items: center;       
  padding: 1rem;            
  height: 100vh;    
  width: 100%;
  max-width: 430px; 
  margin: 0 auto; 
  margin-top: -80px;
`;

const Text = styled.h1`
  font-family: 'Merriweather', serif;
  padding: 1rem 0;
  font-size: 24px; 
  text-align: center; 
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box; 
`;

const T1 = styled.div`
  font-size: 16px;
  font-family: 'Merriweather', serif;
  width: 60%; 
`;

const T1h1 = styled.h1`
  font-size: 15px;
  font-weight: normal; /* Corrigido para evitar bold excessivo */
`;

const T2 = styled.div`
  margin-left: 1rem;
  width: 40%; 
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default function HomePage() {
  return (
    <>
      <Container>
        <Text>Olá usuário</Text>
        <Image src={calendario} alt="Calendário" width={350} height={230} />
        <Image src={line} alt="Linha separadora" width={350} />
        <Assinaturas />
        <Image src={line} alt="Linha separadora" width={350} />
        <Wrapper>
          <T1>
            <Image src={text} alt="BeCoins texto" />
            <T1h1>3 comprar pro level 4</T1h1>
          </T1>
          <T2>
            <Image src={boton} alt="Botão" width={147} height={56} />
          </T2>
        </Wrapper>
        <ImageWrapper>
          <Image src={lvl} alt="Informações do Level" />
        </ImageWrapper>
      </Container>
    </>
  );
}
