import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/EasyMarket_logo.png'

// ============================================
// DONNÉES — liens de navigation
// ============================================
const NAV_LINKS = [
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Pricing',         href: '#pricing'         },
  { label: 'Démo',            href: '#demo'            },
  { label: 'A-propos',        href: '#apropos'         },
  { label: 'Clients',         href: '#clients'         },
  { label: 'Contact',         href: '#contact'         },
]

// ============================================
// SOUS-COMPOSANT — un lien
// ============================================
function NavLink({ href, label, onClick }) {
  return (
    
      <a href={href}
      onClick={onClick}
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        color: '#374151',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
      onMouseLeave={e => e.currentTarget.style.color = '#374151'}
    >
      {label}
    </a>
  )
}

// ============================================
// COMPOSANT PRINCIPAL — Navbar
// ============================================
function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)
  const [scroll, setScroll]         = useState(false)

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fermerMenu = () => setMenuOuvert(false)

  return (
    <>
      {/* STYLES RESPONSIVE */}
      <style>{`
        .nav-links { display: flex !important; }
        .nav-cta   { display: inline-flex !important; }
        .nav-burger { display: none !important; }

        @media (max-width: 768px) {
          .nav-links  { display: none !important; }
          .nav-cta    { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          backgroundColor: '#FFFFFF',
          fontFamily: 'Inter, sans-serif',
          boxShadow: scroll ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >

          {/* LOGO */}
          
            <a href="#"
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={logo}
              alt="EasyMarket"
              style={{
                height: '36px',
                objectFit: 'contain',
              }}
            />
          </a>

          {/* LIENS — desktop uniquement */}
          <div
            className="nav-links"
            style={{
              alignItems: 'center',
              gap: '32px',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>

          {/* BOUTON CTA — desktop uniquement */}
          
           <a  href="#"
            className="nav-cta"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
              borderRadius: '999px',
              height: '44px',
              padding: '0 24px',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(249,115,22,0.35)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Télécharger l'appli
          </a>

          {/* HAMBURGER — mobile uniquement */}
          <button
            className="nav-burger"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              flexDirection: 'column',
              gap: '5px',
            }}
            onClick={() => setMenuOuvert(!menuOuvert)}
            aria-label="Menu"
          >
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#1F2937',
              borderRadius: '2px',
              transition: 'all 0.3s',
              transform: menuOuvert ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}/>
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#1F2937',
              borderRadius: '2px',
              transition: 'all 0.3s',
              opacity: menuOuvert ? 0 : 1,
            }}/>
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#1F2937',
              borderRadius: '2px',
              transition: 'all 0.3s',
              transform: menuOuvert ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}/>
          </button>

        </div>

        {/* MENU MOBILE */}
        {menuOuvert && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #F3F4F6',
            padding: '16px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={fermerMenu}
              />
            ))}
            
              <a href="#"
              onClick={fermerMenu}
              style={{
                background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
                borderRadius: '999px',
                height: '44px',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Télécharger l'appli
            </a>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar