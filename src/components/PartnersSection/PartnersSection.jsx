import React from 'react'
import logoOFII        from '../../assets/images/logo OFII.jpeg'
import logoVolkeno     from '../../assets/images/logo volkeno.jpeg'
import logoMVP         from '../../assets/images/logo lapp 221.jpeg'
import logoKPC         from '../../assets/images/logo kpc.jpeg'
import logoHub         from '../../assets/images/logo Impact HUB.jpeg'
import logoPitchPalab  from '../../assets/images/logo pitch Palabre.jpeg'

// ============================================
// DONNÉES — les 6 partenaires
// ============================================
const PARTENAIRES = [
  { nom: 'OFII',              logo: logoOFII       },
  { nom: 'Volkeno',           logo: logoVolkeno    },
  { nom: 'MVP Lab 221',       logo: logoMVP        },
  { nom: 'KPC Consortium',    logo: logoKPC        },
  { nom: 'Impact HUB Dakar',  logo: logoHub        },
  { nom: 'Pitch Palabre',     logo: logoPitchPalab },
]

// ============================================
// SOUS-COMPOSANT — un logo partenaire
// ============================================
function PartnerLogo({ partenaire }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        flex: '1',
      }}
    >
      <img
        src={partenaire.logo}
        alt={partenaire.nom}
        style={{
          height: '121px',
          maxWidth: '128px',
          objectFit: 'contain',
          filter: 'grayscale(0%)',
          transition: 'filter 0.3s, transform 0.3s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.filter = 'grayscale(0%)'
          e.currentTarget.style.transform = 'scale(1.05)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.filter = 'grayscale(0%)'
          e.currentTarget.style.transform = 'scale(1)'
        }}
      />
    </div>
  )
}

// ============================================
// COMPOSANT PRINCIPAL — PartnersSection
// ============================================
function PartnersSection() {
  return (
    <section
      id="partenaires"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >

        {/* TITRE + SOUS-TITRE */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '36px',
              fontWeight: '800',
              color: '#1F2937',
              marginBottom: '12px',
            }}
          >
            Nos Partenaires Institutionnels
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: '#6B7280',
              lineHeight: '1.6',
            }}
          >
            Ils nous accompagnent dans notre mission de digitalisation du commerce
          </p>
        </div>

        {/* LIGNE DE LOGOS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {PARTENAIRES.map((partenaire, index) => (
            <PartnerLogo
              key={index}
              partenaire={partenaire}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PartnersSection