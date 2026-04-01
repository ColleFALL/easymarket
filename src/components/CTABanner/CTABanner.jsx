import React from 'react'
import phone from '../../assets/images/phone3.jpeg'
import googlePlay from '../../assets/images/icone-google play.jpeg'
import appStore from '../../assets/images/icone-app store.jpeg'

// ============================================
// COMPOSANT PRINCIPAL — CTABanner
// ============================================
function CTABanner() {
  return (
    <section
      id="cta"
      style={{
        background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        overflow: 'visible',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '60px 32px 0 32px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '48px',
          minHeight: '480px',
          position: 'relative',
        }}
      >

        {/* ---- COLONNE GAUCHE — texte + boutons ---- */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            paddingBottom: '60px',
            flex: '0 0 50%',
            zIndex: 3,
          }}
        >

          {/* TITRE */}
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '36px',
              fontWeight: '800',
              color: '#FFFFFF',
              lineHeight: '1.2',
              margin: 0,
            }}
          >
            Prêt à mieux piloter<br />
            votre commerce ?
          </h2>

          {/* SOUS-TITRE */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: '400',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: '1.7',
              margin: 0,
            }}
          >
            Rejoignez les commerçants qui utilisent EasyMarket
            pour suivre leurs chiffres, mieux contrôler leur
            activité et prendre de meilleures décisions.
          </p>

          {/* BOUTONS CTA */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {/* Bouton 1 — Demander une démo */}
            
              <a href="#contact"
              style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: 'transparent',
                borderRadius: '999px',
                height: '52px',
                padding: '0 28px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                border: '2px solid rgba(255,255,255,0.9)',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Demander une démo
            </a>

            {/* Bouton 2 — Commencer maintenant */}
            
              <a href="#contact"
              style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: 'transparent',
                borderRadius: '999px',
                height: '52px',
                padding: '0 28px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                border: '2px solid rgba(255,255,255,0.9)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Commencer maintenant
            </a>
          </div>

          {/* BADGES STORES */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Google Play */}
            
              <a href="#"
              style={{
                display: 'inline-flex',
                borderRadius: '10px',
                overflow: 'hidden',
                height: '48px',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <img
                src={googlePlay}
                alt="Google Play"
                style={{
                  height: '48px',
                  objectFit: 'contain',
                }}
              />
            </a>

            {/* App Store */}
            
             <a  href="#"
              style={{
                display: 'inline-flex',
                borderRadius: '10px',
                overflow: 'hidden',
                height: '48px',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <img
                src={appStore}
                alt="App Store"
                style={{
                  height: '48px',
                  objectFit: 'contain',
                }}
              />
            </a>
          </div>

        </div>

        {/* ---- COLONNE DROITE — téléphone déborde en bas ---- */}
        <div
          className="hidden md:block"
          style={{
            flex: '0 0 45%',
            position: 'relative',
            alignSelf: 'stretch',
          }}
        >
          <img
            src={phone}
            alt="EasyMarket sur mobile"
            style={{
              position: 'absolute',
              bottom: '-250px',
              right: '0',
              width: '350px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
              zIndex: 10,
            }}
          />
        </div>

      </div>
    </section>
  )
}

export default CTABanner