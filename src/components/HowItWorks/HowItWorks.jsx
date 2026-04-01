import React from 'react'

const ETAPES = [
  { texte: 'Ajoutez vos produits et organisez votre catalogue' },
  { texte: 'Suivez vos chiffres en temps réel' },
  { texte: 'Enregistrez ventes, dépenses et mouvements de stock' },
  { texte: 'Analysez vos performances et prenez de meilleures décisions' },
]

function EtapeCard({ texte }) {
  return (
    <div
      className="etape-card"
      style={{
        background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
        borderRadius: '25px',
        padding: '28px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(249,115,22,0.3)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: '700',
        color: '#FFFFFF',
        lineHeight: '1.5',
        textAlign: 'left',
        margin: 0,
      }}>
        {texte}
      </p>
    </div>
  )
}

function HowItWorks() {
  return (
    <section
      id="comment-ca-marche"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <style>{`
        .how-inner {
          max-width: 100%;
          margin: 0 auto;
        }
        .how-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          max-width: 100%;
         margin: 0 auto;
        }
        .how-title { font-size: 36px; }
        .etape-card { height: 154px; }

        @media (max-width: 1024px) {
          .how-title { font-size: 30px !important; }
          .etape-card { height: 150px !important; }
        }

        @media (max-width: 768px) {
          .how-grid   { grid-template-columns: 1fr !important; }
          .how-title  { font-size: 26px !important; }
          .etape-card { height: auto !important; min-height: 120px; padding: 24px 20px !important; }
        }

        @media (max-width: 480px) {
          .how-title { font-size: 22px !important; }
        }
      `}</style>

      <div className="container">
        <div className="how-inner">

          {/* TITRE + SOUS-TITRE */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              className="how-title"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '800',
                color: '#1F2937',
                marginBottom: '12px',
              }}
            >
              Comment ça marche
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: '#111113',
              lineHeight: '1.6',
            }}>
              Une gestion simple.<br />
              Des décisions plus intelligentes.
            </p>
          </div>

          {/* GRILLE 2x2 */}
          <div className="how-grid">
            {ETAPES.map((etape, index) => (
              <EtapeCard key={index} texte={etape.texte} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks