import React, { useRef } from 'react'
import shop1 from '../../assets/images/image Kazamansa (1).jpg'
import shop2 from '../../assets/images/image Kazamansa (2).jpg'
import shop3 from '../../assets/images/image Kazamansa (3).jpg'
import shop4 from '../../assets/images/image Kazamansa (4).jpg'

const BOUTIQUES = [
  { nom: 'Grandkabir',   description: 'Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnue pour nos services informatiques', lien: '#', image: shop1 },
  { nom: 'Yeksina Home', description: 'Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnue pour nos services informatiques', lien: '#', image: shop2 },
  { nom: 'Kazamansa',    description: 'Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnue pour nos services informatiques', lien: '#', image: shop3 },
  { nom: 'Kazamansa',    description: 'Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnue pour nos services informatiques', lien: '#', image: shop4 },
]

// ============================================
// SOUS-COMPOSANT — une carte boutique
// ============================================
function BoutiqueCard({ boutique }) {
  return (
    <div
      className="boutique-card"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        transition: 'transform 0.2s, box-shadow 0.2s',
        scrollSnapAlign: 'start',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
      }}
    >

      {/* IMAGE — dimensions fixes et égales */}
      <div style={{
        width: '100%',
        height: '200px',
        flexShrink: 0,
        overflow: 'hidden',
      }}>
        <img
          src={boutique.image}
          alt={boutique.nom}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>

      {/* CONTENU */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        flex: 1,
      }}>

        {/* NOM */}
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          fontWeight: '700',
          color: '#1F2937',
          margin: 0,
        }}>
          {boutique.nom}
        </h3>

        {/* TRAIT orange — entre titre et paragraphe */}
        <div style={{
          width: 'auto',
          height: '1px',
          backgroundColor: '#f8b17e',
          borderRadius: '2px',
          flexShrink: 0,
        }}/>

        {/* DESCRIPTION */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: '#6B7280',
          lineHeight: '1.6',
          margin: 0,
          flex: 1,
        }}>
          {boutique.description}
        </p>

        {/* LIEN */}
        
          <a href={boutique.lien}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontWeight: '600',
            color: '#F97316',
            textDecoration: 'none',
            alignSelf: 'flex-start',
            marginTop: '8px',
          }}
        >
          Visiter la boutique
        </a>

      </div>
    </div>
  )
}

// ============================================
// COMPOSANT PRINCIPAL — ShopsSection
// ============================================
function ShopsSection() {
  const carouselRef = useRef(null)

  const scrollGauche = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -280, behavior: 'smooth' })
    }
  }

  const scrollDroite = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 280, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="boutiques"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <style>{`
        /* Desktop — grille 4 colonnes */
        .shops-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* Carousel caché sur desktop */
        .shops-carousel-wrapper { display: none; }

        .shops-titre { font-size: 36px; }

        /* Tablette */
        @media (max-width: 1024px) {
          .shops-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px;
          }
          .shops-titre { font-size: 28px !important; }
        }

        /* Mobile — carousel horizontal */
        @media (max-width: 768px) {
          .shops-grid { display: none !important; }
          .shops-carousel-wrapper { display: block !important; }
          .shops-carousel {
            display: flex;
            gap: 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding-bottom: 8px;
          }
          .shops-carousel::-webkit-scrollbar { display: none; }
          .boutique-card {
            width: 260px !important;
            min-width: 260px !important;
          }
          .shops-titre { font-size: 24px !important; }
          .shops-fleches { justify-content: center !important; }
        }

        /* Petit mobile */
        @media (max-width: 480px) {
          .boutique-card {
            width: 240px !important;
            min-width: 240px !important;
          }
          .shops-titre { font-size: 22px !important; }
        }
      `}</style>

      <div className="container">

        {/* TITRE */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            className="shops-titre"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              color: '#1F2937',
              marginBottom: '12px',
            }}
          >
            Visitez les{' '}
            <span style={{ color: '#F97316' }}>boutiques</span>
            {' '}de nos clients
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#6B7280',
            lineHeight: '1.6',
          }}>
            Découvrez les boutiques de nos clients<br />
            Des commerçants qui utilisent EasyMarket au quotidien
          </p>
        </div>

        {/* DESKTOP + TABLETTE — grille */}
        <div className="shops-grid">
          {BOUTIQUES.map((boutique, index) => (
            <BoutiqueCard key={index} boutique={boutique} />
          ))}
        </div>

        {/* MOBILE — carousel avec flèches */}
        <div className="shops-carousel-wrapper">
          <div className="shops-carousel" ref={carouselRef}>
            {BOUTIQUES.map((boutique, index) => (
              <BoutiqueCard key={index} boutique={boutique} />
            ))}
          </div>

          {/* FLÈCHES mobile */}
          <div
            className="shops-fleches"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              marginTop: '24px',
            }}
          >
            {/* Flèche gauche */}
            <button
              onClick={scrollGauche}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1.5px solid #D1D5DB',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#F97316'
                e.currentTarget.style.backgroundColor = '#FFF7ED'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#D1D5DB'
                e.currentTarget.style.backgroundColor = '#FFFFFF'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#1F2937" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            {/* Flèche droite */}
            <button
              onClick={scrollDroite}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#F97316',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#EA6A0A'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F97316'}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#FFFFFF" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ShopsSection