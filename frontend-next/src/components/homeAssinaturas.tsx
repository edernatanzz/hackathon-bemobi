'use client'
import Image from "next/image";
import imgclaro from "../assets/Assinatura Claro.png";
import imgsky from "../assets/Assinatura SKY(1).png";
import imgtim from "../assets/Assinatura TIM.png";
import './home/css.css';
import styled from "styled-components";

const Marcas = styled.div`
display:flex;
flex-direction: row;
gap : 1rem;
`


export default function Assinaturas() {
  return (
    <div className="container">
      <h1>Assinaturas</h1>
      <Marcas>

        <Image src={imgclaro} alt="claro" width={100} height={100} />
        <Image src={imgtim} alt="tim" width={100} height={100} />
        <Image src={imgsky} alt="sky" width={100} height={100} />

      </Marcas>
    </div>
  );
}
