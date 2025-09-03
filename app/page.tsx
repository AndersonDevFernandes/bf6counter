import "./globals.css";
import Countdown from "./components/Countdown/page";
import Sobre from "./components/Sobre/page";
import Contato from "./components/Contato/page";

export default function Home() {
  const optimizedVideoUrl =
    "https://res.cloudinary.com/dldpo6918/video/upload/q_auto,f_auto,vc_auto/v1755881926/bg_ucaxrc.mp4";

  return (
    <>
      {/* Container principal com vídeo de fundo */}
      <main className="container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={optimizedVideoUrl} type="video/mp4" />
          Seu navegador não suporta vídeo de background.
        </video>

        <header className="header">
          <div className="header-content">
            <div className="logo">BATTLEFIELD 6</div>
            <nav className="nav-menu">
              <a href="#home">CONTADOR</a>
              <a href="#about">MODOS DE JOGO</a>
              <a href="#contact">CONTATO</a>
            </nav>
          </div>
        </header>

        <div className="content">
          <h1 className="title">BATTLEFIELD 6</h1>
          <main>
            <Countdown />
          </main>
          <div className="buttons">
            <a
              href="https://www.ea.com/pt-br/games/battlefield/battlefield-6"
              target="_blank"
            >
              <button className="site-button">SITE</button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=fBKcXfOxy7o&t=1s"
              target="_blank"
            >
              <button className="trailer-button">TRAILER ▶</button>
            </a>
          </div>
        </div>
      </main>

      {/* Agora as seções ficam FORA do container */}
      <div>
        <Sobre />
      </div>
      <div>
        <Contato />
      </div>
    </>
  );
}
