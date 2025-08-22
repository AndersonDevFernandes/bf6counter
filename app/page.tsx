import "./globals.css";
import Countdown from "./components/Countdown/page";

export default function Home() {
  // Use a URL completa e correta do Cloudinary aqui
  const optimizedVideoUrl = "https://res.cloudinary.com/dldpo6918/video/upload/q_auto,f_auto,vc_auto/v1755881926/bg_ucaxrc.mp4";

  return (
    <main className="container">
      
      {/* Vídeo de fundo */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={optimizedVideoUrl} type="video/mp4" />
        Seu navegador não suporta vídeo de background.
      </video>
      
      {/* Restante do seu código... */}
      <header className="header">
        <div className="header-content">
          <div className="logo">BATTLEFIELD 6</div>
          <nav className="nav-menu">
            <a href="#home">HOME</a>
            <a href="#about">SOBRE</a>
            <a href="#contact">CONTATO</a>
          </nav>
        </div>
      </header>
      
      <div className="content">
        <h1>BATTLEFIELD 6</h1>
        <main>
          <Countdown />
        </main>
        <div className="buttons">
          <a href="https://www.ea.com/pt-br/games/battlefield/battlefield-6" target="_blank"><button className="site-button">SITE</button></a>
          <a href="https://www.youtube.com/watch?v=fBKcXfOxy7o&t=1s" target="_blank"><button className="trailer-button">TRAILER ▶</button></a>
        </div>        
      </div>
    </main>
   );
}
