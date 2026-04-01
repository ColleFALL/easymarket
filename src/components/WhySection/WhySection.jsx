import React from 'react'
import phone from '../../assets/images/Phone1.png'

const AVANTAGES = [
  { texte: 'Suivez vos ventes en temps réel' },
  { texte: "Sachez exactement ce qu'il vous reste en stock" },
  { texte: 'Identifiez vos produits les plus rentables' },
  { texte: 'Contrôlez votre activité même à distance' },
  { texte: 'Gardez un oeil sur vos dépenses' },
  { texte: 'Décidez plus vite grâce à des chiffres clairs' },
]

function IconeOrange() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="10" r="7" fill="#F97316" opacity="0.2"/>
      <circle cx="18" cy="10" r="4" fill="#F97316"/>
      <line x1="18" y1="17" x2="18" y2="26" stroke="#F97316" strokeWidth="2"/>
      <line x1="12" y1="21" x2="18" y2="18" stroke="#F97316" strokeWidth="2"/>
      <line x1="24" y1="21" x2="18" y2="18" stroke="#F97316" strokeWidth="2"/>
      <circle cx="24" cy="26" r="6" fill="#FFF7ED" stroke="#F97316" strokeWidth="1.5"/>
      <text x="24" y="30" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#F97316">$</text>
    </svg>
  )
}

function AvantageCard({ texte }) {
  return (
    <div
      className="avantage-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        overflow: 'hidden',
        height: '90px',
        padding: '0 16px 0 0',
      }}
    >
      <div style={{
        width: '14px',
        height: '44px',
        backgroundColor: '#F97316',
        borderRadius: '0 16px 16px 0',
        flexShrink: 0,
      }}/>
      <div style={{ flexShrink: 0 }}>
        <IconeOrange />
      </div>
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

function WhySection() {
  return (
    <section
      id="apropos"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <style>{`
        .why-wrapper {
          display: flex;
          align-items: center;
          gap: 48px;
        }
        .why-phone {
          flex: 0 0 40%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .why-content {
          flex: 0 0 57%;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .why-title { font-size: 40px; }

        @media (max-width: 1024px) {
          .why-wrapper { gap: 32px; }
          .why-phone   { flex: 0 0 35%; }
          .why-content { flex: 0 0 62%; }
          .why-title   { font-size: 32px !important; }
        }

        @media (max-width: 768px) {
          .why-wrapper  { flex-direction: column; }
          .why-phone    { flex: none; width: 100%; }
          .why-phone img { max-width: 240px !important; }
          .why-content  { flex: none; width: 100%; }
          .why-title    { font-size: 28px !important; }
          .why-grid     { grid-template-columns: 1fr !important; }
          .avantage-card { height: auto !important; min-height: 80px; }
        }

        @media (max-width: 480px) {
          .why-title { font-size: 24px !important; }
        }
      `}</style>

      <div className="container">
        <div className="why-wrapper">

          {/* TÉLÉPHONE */}
          <div className="why-phone">
            <img
              src={phone}
              alt="Application EasyMarket"
              style={{
                width: '100%',
                maxWidth: '380px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.12))',
              }}
            />
          </div>

          {/* CONTENU */}
          <div className="why-content">
            <div>
              <h2
                className="why-title"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '800',
                  color: '#1F2937',
                  lineHeight: '1.2',
                  marginBottom: '12px',
                }}
              >
                Pourquoi{' '}
                <span style={{ color: '#F97316' }}>EasyMarket</span>
                {' '}?
              </h2>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                color: '#111113',
                lineHeight: '1.6',
                margin: 0,
              }}>
                Prenez de meilleures décisions pour votre boutique
              </p>
            </div>

            <div className="why-grid">
              {AVANTAGES.map((avantage, index) => (
                <AvantageCard key={index} texte={avantage.texte} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhySection