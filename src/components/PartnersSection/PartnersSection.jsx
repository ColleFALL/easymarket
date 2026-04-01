import React from 'react'
import logoOFII       from '../../assets/images/logo OFII.jpg'
import logoVolkeno    from '../../assets/images/logo volkeno.jpg'
import logoMVP        from '../../assets/images/logo lapp 221.jpg'
import logoKPC        from '../../assets/images/logo kpc.jpg'
import logoHub        from '../../assets/images/logo Impact HUB.jpg'
import logoPitchPalab from '../../assets/images/logo pitch Palabre.jpg'

const PARTENAIRES = [
  { nom: 'OFII',             logo: logoOFII       },
  { nom: 'Volkeno',          logo: logoVolkeno    },
  { nom: 'MVP Lab 221',      logo: logoMVP        },
  { nom: 'KPC Consortium',   logo: logoKPC        },
  { nom: 'Impact HUB Dakar', logo: logoHub        },
  { nom: 'Pitch Palabre',    logo: logoPitchPalab },
]

// ============================================
// SOUS-COMPOSANT — un logo partenaire
// ============================================
function PartnerLogo({ partenaire }) {
  return (
    <div
      className="partner-item"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <img
        src={partenaire.logo}
        alt={partenaire.nom}
        style={{
          height: '120px',
          maxWidth: '250px',
          objectFit: 'contain',
          transition: 'transform 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
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
        fontFamily: 'Inter, sans-serif',
        paddingTop: '100px',   // ← augmente cette valeur
        paddingBottom: '80px',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <style>{`
        .partners-section {
          padding: 250px 0 80px 0; /* ← 160px en haut pour le téléphone CTABanner */
        }

        .partners-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr); /* ← 6 logos en desktop */
          gap: 16px;
          align-items: center;
        }

        .partner-item {
          width: 100%;
        }

        .partners-titre { font-size: 36px; }

        /* Tablette — 3 par ligne */
        @media (max-width: 1024px) {
          .partners-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .partners-titre { font-size: 28px !important; }
          .partners-section { padding: 180px 0 80px 0 !important; }
        }

        /* Mobile — 2 par ligne */
        @media (max-width: 768px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px;
          }
          .partners-titre { font-size: 24px !important; }
          .partners-section { padding: 20px 0 20px 0 !important; }
        }

        /* Petit mobile — 2 par ligne */
        @media (max-width: 480px) {
          .partners-titre { font-size: 22px !important; }
          .partners-section { padding: 0px 0 0px 0 !important; }

        }
      `}</style>

      <div className="partners-section">
        <div className="container">

          {/* TITRE + SOUS-TITRE */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              className="partners-titre"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '800',
                color: '#1F2937',
                marginBottom: '12px',
              }}
            >
              Nos Partenaires Institutionnels
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: '#6B7280',
              lineHeight: '1.6',
            }}>
              Ils nous accompagnent dans notre mission de digitalisation du commerce
            </p>
          </div>

          {/* GRILLE LOGOS */}
          <div className="partners-grid">
            {PARTENAIRES.map((partenaire, index) => (
              <PartnerLogo key={index} partenaire={partenaire} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default PartnersSection