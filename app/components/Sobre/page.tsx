"use client"

import "./Sobre.css"

export default function Sobre() {
  return (
    <div>
      <section className="sobre">
        <p className="titulo-modo-principal">Modos de Jogo</p>
        <div className="modoDeJogo">          
          <div className="modos modo01">
            <div className="titulo-modo-container">
              <p className="titulo-modo ">Multplayer</p>
            </div>
            <div>
              <p className="descricao-modo">Conquiste a glória em modos emblemáticos em grande escala como Conquista, Ruptura e Investida. Entre em experiências intensas e aceleradas com Domínio da Colina e Dominação. Lute em locais emblemáticos do mundo todo, como Cairo, Brooklyn, Gibraltar e muito mais.</p>
            </div>
          </div>
          <div className="modos modo02">
            <div className="titulo-modo-container">
              <p className="titulo-modo ">Campanha em escala global</p>
            </div>
            <div>
              <p className="descricao-modo">A Campanha voltou. Pilote tanques através do Saara. Invada as praias de Gibraltar. Defenda Nova York da invasão. Junte-se a um pelotão de elite de Marine Raiders lutando incansavelmente para salvar um mundo à beira do colapso.</p>
            </div>
          </div>
          <div className="modos modo03">
            <div className="titulo-modo-container">
              <p className="titulo-modo">Portal</p>
            </div>
            <div>
              <p className="descricao-modo">Assuma um controle sem precedentes do seu ambiente ao mover, redimensionar e duplicar objetos. Crie seu próprio modo de jogo e UI personalizada. Crie experiências multiplayer exclusivas usando scripts de NPC. Sua criação pode fazer sucesso e se tornar um modo oficial.</p>              
            </div>
          </div>          
        </div>
        <div className="classes"></div>   
      </section>
    </div>
  )
}