import React from 'react'
import phone from '../../assets/images/phone3.png'

const FEATURES = [
  { texte: 'Gestion des ventes et dépenses' },
  { texte: 'Import / export de produits' },
  { texte: 'Factures et tickets de caisse' },
  { texte: 'Multi-utilisateurs Contrôle à distance' },
  { texte: 'Gestion du stock en temps réel' },
  { texte: "Site e-commerce lié à l'application" },
  { texte: 'Tableau de bord de performance' },
  { texte: 'Suivi des encaissements et décaissements' },
  { texte: 'Suivi des meilleurs produits' },
]

// ============================================
// SOUS-COMPOSANT — une carte feature
// ============================================
function FeatureCard({ texte }) {
  return (
    <div
      className="feature-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        overflow: 'hidden',  // ← important pour couper le demi-cercle
        height: '100px',
        padding: '0 16px 0 0',
      }}
    >
      {/* Demi-cercle orange — collé à l'intérieur gauche */}
      <div
        style={{
          width: '14px',
          minWidth: '14px',
          height: '44px',
          backgroundColor: '#F97316',
          borderRadius: '0 16px 16px 0',
          flexShrink: 0,
        }}
      />

      {/* Texte */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        fontWeight: '600',
        color: '#1F2937',
        lineHeight: '1.5',
        margin: 0,
      }}>
        {texte}
      </p>
    </div>
  )
}

// ============================================
// COMPOSANT PRINCIPAL — FeaturesSection
// ============================================
function FeaturesSection() {
  return (
    <section
      id="fonctionnalites"
      style={{
        backgroundColor: '#F9FAFB',
        padding: '80px 0',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .features-wrapper {
          display: flex;
          align-items: stretch;
          gap: 48px;
        }
        .features-left {
          flex: 0 0 55%;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .features-right {
          flex: 0 0 42%;
          display: flex;
          align-items: stretch;
          justify-content: center;
        }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .features-title { font-size: 36px; }
        .feature-card   { height: 80px; }

        @media (max-width: 1024px) {
          .features-wrapper { gap: 32px; }
          .features-left    { flex: 0 0 55%; }
          .features-right   { flex: 0 0 42%; }
          .features-title   { font-size: 28px !important; }
          .feature-card     { height: 70px !important; }
        }

        @media (max-width: 768px) {
          .features-wrapper {
            flex-direction: column;
          }
          .features-left  { flex: none; width: 100%; }
          .features-right {
            flex: none;
            width: 100%;
            justify-content: center;
            max-height: 300px;
          }
          .features-title { font-size: 26px !important; }
          .features-grid  { grid-template-columns: 1fr !important; }
          .feature-card   { height: auto !important; min-height: 70px; }
          .features-phone { max-width: 220px !important; height: 300px !important; }
        }

        @media (max-width: 480px) {
          .features-title { font-size: 22px !important; }
        }
      `}</style>

      <div className="container">
        <div className="features-wrapper">

          {/* ---- COLONNE GAUCHE ---- */}
          <div className="features-left">

            {/* TITRE */}
            <div>
              <h2
                className="features-title"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '800',
                  color: '#1F2937',
                  marginBottom: '12px',
                  lineHeight: '1.2',
                }}
              >
                <span style={{ color: '#F97316' }}>Fonctionnalités</span>
                {' '}clés
              </h2>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: '#111113',
                lineHeight: '1.6',
              }}>
                Tout ce qu'il vous faut pour gérer et développer votre commerce
              </p>
            </div>

            {/* GRILLE FEATURES + BOUTON */}
            <div className="features-grid">

              {/* 8 premières cartes */}
              {FEATURES.slice(0, 8).map((feature, index) => (
                <FeatureCard key={index} texte={feature.texte} />
              ))}

              

              {/* Bouton même ligne que 9ème carte */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                
                 <a href="#contact"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    backgroundColor: '#1F2937',
                    borderRadius: '999px',
                    height: '48px',
                    padding: '0 28px',
                    width: '290px',
                    color: 'white',
                    fontSize: '15px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Demander une démo
                </a>
              </div>
              {/* 9ème carte */}
              <FeatureCard key={8} texte={FEATURES[8].texte} />

            </div>
          </div>

          {/* ---- COLONNE DROITE — téléphone pleine hauteur ---- */}
          <div className="features-right">
            <img
              src={phone}
              alt="Fonctionnalités EasyMarket"
              className="features-phone"
              style={{
                width: '100%',
                maxWidth: '320px',
                height: '100%',        // ← prend toute la hauteur de la section
                objectFit: 'contain',
                objectPosition: 'center',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.12))',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturesSection