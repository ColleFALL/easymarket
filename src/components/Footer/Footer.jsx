import React from 'react'

// ============================================
// DONNÉES — liens footer
// ============================================
const LIENS = [
  { label: 'Pricing',   href: '#pricing'   },
  { label: 'Démo',      href: '#demo'      },
  { label: 'A-propos',  href: '#apropos'   },
  { label: 'Clients',   href: '#clients'   },
  { label: 'Contact',   href: '#contact'   },
]

// ============================================
// SOUS-COMPOSANT — icône réseau social
// ============================================
function SocialIcon({ href, children }) {
  return (
    
      <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.2s',
        textDecoration: 'none',
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.35)'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
    >
      {children}
    </a>
  )
}

// ============================================
// COMPOSANT PRINCIPAL — Footer
// ============================================
function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: 'linear-gradient(135deg, #EA6A0A 0%, #F97316 50%, #FBBF24 100%)',
        fontFamily: 'Inter, sans-serif',
        paddingTop: '60px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >

        {/* ---- CONTENU PRINCIPAL — 3 colonnes ---- */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '48px',
            paddingBottom: '40px',
            flexWrap: 'wrap',
          }}
        >

          {/* COLONNE 1 — Logo + slogan */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              flex: '0 0 25%',
            }}
          >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z"/>
              </svg>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '18px',
                  fontWeight: '800',
                  color: '#FFFFFF',
                }}
              >
                EasyMarket
              </span>
            </div>

            {/* Slogan */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: '1.6',
                margin: 0,
                maxWidth: '200px',
              }}
            >
              Obtenez un outil de gestion et/ou site e-commerce en un temps record !
            </p>
          </div>

          {/* COLONNE 2 — Liens navigation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {LIENS.map((lien, index) => (
              
                
                <a 
                key={index}
                href={lien.href}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.9)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
              >
                {lien.label}
              </a>
            ))}
          </div>

          {/* COLONNE 3 — Réseaux sociaux */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              Rejoignez nous
            </p>

            {/* Icônes réseaux */}
            <div style={{ display: 'flex', gap: '12px' }}>

              {/* Facebook */}
              <SocialIcon href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </SocialIcon>

              {/* Instagram */}
              <SocialIcon href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white"/>
                </svg>
              </SocialIcon>

              {/* LinkedIn */}
              <SocialIcon href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </SocialIcon>

              {/* TikTok */}
              <SocialIcon href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </SocialIcon>

            </div>
          </div>

        </div>

        {/* LIGNE DE SÉPARATION */}
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.3)',
          }}
        />

        {/* COPYRIGHT */}
        <div
          style={{
            textAlign: 'center',
            padding: '20px 0',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
            }}
          >
            © 2026 EasyMarket. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer