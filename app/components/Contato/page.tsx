"use client"

import "./Contato.css"

import Image from "next/image"

export default function Contato() {
  return (
    <footer>
      <div className="contato-container">
        <p className="footer-text">O projeto tem como objetivo exercitar a criação de interfaces utilizando nextjs.</p>
        <p className="footer-text">Os diretos de imagem são da EA Games.</p>
        <p className="footer-text">Estou aberto a sugestões e melhorias.</p>
        <p className="footer-text">Obrigado pela visita nação battlefield!</p>
      </div>
      <div>
        <a href="https://github.com/AndersonDevFernandes" target="_blank" rel="noopener noreferrer">
          <Image src="/imagem/github.png" alt="github" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/anderson-fernandes-da-silva-12aa6932/" target="_blank" rel="noopener noreferrer">
          <Image src="/imagem/linkedin.png" alt="linkedin" className="social-icon" />
        </a>
      </div>
    </footer>
  )
}