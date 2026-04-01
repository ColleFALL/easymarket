import React from 'react'
import phone      from '../../assets/images/phone2.png'
// import googlePlay from '../../assets/images/icone-google play.jpeg'
// import appStore   from '../../assets/images/icone-app store.jpeg'
import googlePlay2 from '../../assets/images/google_play2.jpg'

function HeroSection() {
  return (
    <>
      <style>{`
        .hero-title { font-size: 52px !important; }
        .hero-phone { display: flex !important; }

        @media (max-width: 1024px) {
          .hero-title { font-size: 40px !important; }
        }

        @media (max-width: 768px) {
          .hero-container { flex-direction: column !important; padding-top: 40px !important; }
          .hero-title     { font-size: 32px !important; }
          .hero-phone     { display: none !important; }
          .hero-left      { padding: 40px 24px !important; }
        }
      `}</style>

      <section
        id="hero"
        style={{
          minHeight: '669px',
          background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
          fontFamily: 'Inter, sans-serif',
          overflow: 'hidden',
          marginTop: '72px',
        }}
      >
        <div
          className="hero-container"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            minHeight: '669px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '48px',
          }}
         >

          {/* GAUCHE — texte + CTA */}
          <div
            className="hero-left"
            style={{
              flex: '0 0 50%',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              padding: '60px 0',
            }}
          >

            {/* TITRE */}
            <h1
              className="hero-title"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '800',
                color: '#FFFFFF',
                lineHeight: '1.15',
                margin: 0,
              }}
            >
              EasyMarket, l'outil <br />
              d'aide à la décision des <br />
              commerçants africains
            </h1>

            {/* BOUTONS */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>

              {/* Démo */}
              
                <a href="#"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: '#1F2937',
                  borderRadius: '999px',
                  width:   '240px',
                  height: '56px',
                  padding: '0 28px',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: '600',
                  text:  'center',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Demander une démo
              </a>

              {/* Commencer */}
              
                <a href="#"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  backgroundColor: 'transparent',
                  borderRadius: '999px',
                  width:  '250px',
                  height: '56px',
                  padding: '0 28px',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  border: '2px solid rgba(255,255,255,0.8)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                Commencer maintenant
              </a>

            </div>

            {/* BADGE GOOGLE PLAY — flottant style maquette */}
<div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
  
    <a href="#"
    style={{
      display: 'inline-flex',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    }}
  >
    <img
      src={googlePlay2}
      alt="Télécharger sur Google Play"
      style={{
        height: '40px',
        objectFit: 'contain',
      }}
    />
  </a>
</div>
</div>

          {/* DROITE — téléphone */}
          <div
            className="hero-phone"
            style={{
              flex: '0 0 48%',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <img
              src={phone}
              alt="Application EasyMarket"
              style={{
                width: '100%',
                maxWidth: '520px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
              }}
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSection