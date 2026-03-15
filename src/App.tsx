import './App.css'
import emblemImg from './assets/emblem.png'
import signatureImg from './assets/signature.png'
import portraitStandingImg from './assets/portrait_standing.png'
import portraitTarotImg from './assets/portrait_tarot.png'

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
              <span className="accent-text">Sacred Sanctuary of the Dragon</span>
              <h1>聖龍の隠れ家、<br />再誕の刻。</h1>
              <p className="hero-p">
                世界の裏を知る者が、こっそり頼る。<br />
                イギリスと神道の系譜が交差する、唯一無二の秘匿鑑定室へようこそ。
              </p>
              <div className="cta-group">
                <a href="#contact" className="btn btn-filled">鑑定を予約する</a>
                <a href="#services" className="btn" style={{ marginLeft: '1rem' }}>儀式の内容</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div className="about-text" style={{ animation: 'reveal-up 1.2s ease forwards' }}>
                <h2 className="section-title" style={{ textAlign: 'left' }}>The Soul of <br />Sally Dragon</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                  宮柱と巫女の血を引き、10代から過酷な滝行を完遂。<br />
                  イギリスから招聘した本流の師のもとで6年。
                </p>
                <p style={{ opacity: 0.8 }}>
                  画家、政治家、刑事、そして経営者。<br />
                  「口の堅い」プロフェッショナルたちが最後に行き着く、<br />
                  静寂と知性に満ちた中世魔術師の書斎へ。
                </p>
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
                <p style={{ opacity: 0.7, fontSize: '1.1rem' }}>
                  対面、そしてオンライン。<br />
                  100種を超すカードと霊視が織りなす「儀式」は、<br />
                  あなたの運命の深層を静かに映し出します。
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
                <span style={{ color: 'var(--clr-accent)', fontSize: '0.8rem', letterSpacing: '0.3em' }}>DIVINATION I</span>
                <h3>秘匿タロット・トランプ</h3>
                <p>100種以上のカードと中世イギリスの伝統技法。人生の裏側にある「真実」を照らし出します。</p>
              </div>
              <div className="service-card">
                <span style={{ color: 'var(--clr-accent)', fontSize: '0.8rem', letterSpacing: '0.3em' }}>DIVINATION II</span>
                <h3>霊視・前世鑑定</h3>
                <p>表面的な悩みを超え、魂の系譜から現在の課題の根本を紐解く、深い対話。 </p>
              </div>
              <div className="service-card">
                <span style={{ color: 'var(--clr-accent)', fontSize: '0.8rem', letterSpacing: '0.3em' }}>PREMIUM</span>
                <h3>法人・経営戦略鑑定</h3>
                <p>決断を迫られるリーダーへ。静寂の書斎にて、秘匿性の高い戦略的アドバイスを提供。 </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <h2 className="section-title">Connect with Sanctuary</h2>
          <p>海外（英・独・米）からのオンライン鑑定も常時受け付けております。</p>
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
