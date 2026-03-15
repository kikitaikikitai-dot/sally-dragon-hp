import './App.css'
import emblemImg from './assets/emblem.png'
import signatureImg from './assets/signature.png'
import portraitStandingImg from './assets/portrait_standing.png'
import portraitTarotImg from './assets/portrait_tarot.jpg'

function App() {
  return (
    <div className="app">
      <div className="bg-grain"></div>
      
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">SALLY DRAGON</div>
            <ul className="nav-links">
              <li><a href="#about">Provenance</a></li>
              <li><a href="#gallery">Ritual</a></li>
              <li><a href="#services">Sanctuary</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <img src={emblemImg} alt="Sally Dragon Emblem" className="emblem-img" />
              <span className="accent-text">A Spiritual Home in Your Language</span>
              <h1>異空で、<br />日本語の深淵に還る。</h1>
              <p className="hero-p">
                海外で、言葉にできない孤独を抱えるあなたへ。<br />
                阿吽の呼吸で通じ合う、静寂と知性の鑑定室。
              </p>
              <div className="cta-group">
                <a href="#contact" className="btn btn-filled">心を解き放つ</a>
                <a href="#about" className="btn" style={{ marginLeft: '1rem' }}>聖龍の系譜</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div className="about-text" style={{ animation: 'reveal-up 1.2s ease forwards' }}>
                <h2 className="section-title" style={{ textAlign: 'left' }}>共感という名の、<br />情緒のデトックス。</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                  「それ、日本人あるあるですよね」<br />
                  現地語の論理では救いきれない、心の「澱（おり）」を、<br />
                  言霊の響きとともに溶かしていきます。
                </p>
                <div style={{ marginBottom: '2.5rem', opacity: 0.9 }}>
                  <p>海外生活の長い緊張、国際関係の機微、将来への漠然とした不安。</p>
                  <p>説明不要の「日本の基準」と、イギリス伝統の精密な占術を羅針盤に。</p>
                </div>
                <img src={signatureImg} alt="Sally Dragon Signature" className="signature-img" />
              </div>
              <div className="about-visual">
                <div className="portrait-container">
                  <img src={portraitStandingImg} alt="Sally Dragon Portrait" className="portrait-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section" style={{ paddingBottom: '0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem' }}>
              <div className="portrait-container" style={{ height: '700px' }}>
                <img src={portraitTarotImg} alt="Sally Dragon Tarot Session" className="portrait-img" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--clr-accent)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>The Ritual</h3>
                <p style={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: '2' }}>
                  100種を超すカードは、あなたの心象風景を映す鏡。<br />
                  中世イギリスの伝統技法と神道の感性が交差する「儀式」は、<br />
                  ここがどこであっても、あなたを「あるべき場所」へと導きます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Sanctuary Services</h2>
            <div className="service-grid">
              <div className="service-card">
                <span style={{ color: 'var(--clr-accent)', fontSize: '0.8rem', letterSpacing: '0.3em' }}>LIFE DIRECTION</span>
                <h3>人生の分岐点・羅針盤</h3>
                <p>「このまま海外で働くべきか、日本に還るべきか」。あなたの迷いに、日本の精神性をベースにした明確な背中押しを。 </p>
              </div>
              <div className="service-card">
                <span style={{ color: 'var(--clr-accent)', fontSize: '0.8rem', letterSpacing: '0.3em' }}>RELATIONSHIP</span>
                <h3>国際恋愛・人間関係の機微</h3>
                <p>文化の差、言葉の壁。阿吽の呼吸が通じない場所だからこそ、日本語で感情の細部までを解きほぐします。 </p>
              </div>
              <div className="service-card">
                <span style={{ color: 'var(--clr-accent)', fontSize: '0.8rem', letterSpacing: '0.3em' }}>BUSINESS STRATEGY</span>
                <h3>経営・法人戦略鑑定</h3>
                <p>職人気質の精密な分析。海外展開や組織運営、孤独なリーダーの決断に、日本的な知性と客観的な視点を。 </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <h2 className="section-title">Connect with Sanctuary</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--clr-accent)' }}>日本語でつながる、安心と信頼の時間。</p>
          <p>英・独・米をはじめとする世界各地からのオンライン鑑定を承っております。</p>
          <div className="social-links">
            <a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
          </div>
          <p style={{ marginTop: '4rem', opacity: 0.4, fontSize: '0.8rem' }}>
            &copy; 2026 SALLY DRAGON STUDIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
