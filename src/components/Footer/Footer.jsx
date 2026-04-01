import React from 'react'
import logo from '../../assets/images/logo2.png'

const LIENS = [
  { label: 'Pricing',  href: '#pricing'  },
  { label: 'Démo',     href: '#demo'     },
  { label: 'A-propos', href: '#apropos'  },
  { label: 'Clients',  href: '#clients'  },
  { label: 'Contact',  href: '#contact'  },
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
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        flexShrink: 0,
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
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
      }}
    >
      <style>{`
        .footer-inner {
          padding: 60px 0 0 0;
        }

        .footer-grid {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
          padding-bottom: 40px;
          flex-wrap: wrap;
        }

        .footer-col1 { flex: 0 0 28%; }
        .footer-col2 { flex: 0 0 20%; }
        .footer-col3 { flex: 0 0 auto; }

        /* Tablette */
        @media (max-width: 1024px) {
          .footer-col1 { flex: 0 0 35%; }
          .footer-col2 { flex: 0 0 25%; }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .footer-grid {
            flex-direction: column !important;
            gap: 28px !important;
          }
          .footer-col1,
          .footer-col2,
          .footer-col3 {
            flex: none !important;
            width: 100% !important;
          }
          .footer-inner { padding: 40px 0 0 0 !important; }
        }
      `}</style>

      <div className="container">
        <div className="footer-inner">

          {/* CONTENU PRINCIPAL — 3 colonnes */}
          <div className="footer-grid">

            {/* COLONNE 1 — Logo + slogan */}
            <div className="footer-col1" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>

              {/* Logo blanc */}
              <a href="#" style={{ display: 'inline-flex' }}>
                <img
                  src={logo}
                  alt="EasyMarket"
                  style={{
                    height: '36px',
                    objectFit: 'contain',
                    // filter: 'brightness(0) invert(1)',
                    color: 'white'
                  }}
                />
              </a>

              {/* Slogan */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: '1.6',
                margin: 0,
                maxWidth: '220px',
              }}>
                Obtenez un outil de gestion et/ou site
                e-commerce en un temps record !
              </p>
            </div>

            {/* COLONNE 2 — Liens */}
            <div className="footer-col2" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}>
              {LIENS.map((lien, index) => (
                
                  
                  <a href={lien.href}
                  key={index}
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
            <div className="footer-col3" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '700',
                color: '#FFFFFF',
                margin: 0,
              }}>
                Rejoignez nous
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>

                {/* Facebook */}
                <SocialIcon href="https://facebook.com">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F97316">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </SocialIcon>

                {/* Instagram */}
                <SocialIcon href="https://instagram.com">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="#F97316" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="#F97316"/>
                  </svg>
                </SocialIcon>

                {/* LinkedIn */}
                <SocialIcon href="https://linkedin.com">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F97316">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </SocialIcon>

                {/* TikTok */}
                <SocialIcon href="https://tiktok.com">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F97316">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                </SocialIcon>

              </div>
            </div>

          </div>

          {/* LIGNE DE SÉPARATION */}
          <div style={{
            width: '100%',
            height: '1px',
            backgroundColor: 'white',
          }}/>

          {/* COPYRIGHT */}
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
            }}>
              © 2026 EasyMarket. Tous droits réservés.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer