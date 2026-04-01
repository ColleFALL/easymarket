import React from 'react'

const FORMULES = [
  {
    nom: 'Formule Solo',
    description: 'Pour les commerçants qui veulent démarrer simplement.',
    prix: '5 900',
    couleurIcone: '#1F2937',
    avantages: [
      'Un utilisateur',
      'Gestion des ventes',
      'Gestion du stock simplifiée',
      'Suivi des dépenses',
      'Tableau de bord intuitif',
      'Factures et tickets',
    ],
  },
  {
    nom: 'Formule Team',
    description: 'Pour les équipes qui veulent mieux collaborer.',
    prix: '15 000',
    couleurIcone: '#F97316',
    avantages: [
      'Plusieurs comptes utilisateurs',
      'Accès adaptés selon les rôles',
      "Suivi centralisé de l'activité",
      'Contrôle renforcé',
      'Tableau de bord partagé',
    ],
  },
  {
    nom: 'Formule Team',
    description: 'Pour les commerces qui veulent aller plus loin.',
    prix: '25 000',
    couleurIcone: '#F97316',
    avantages: [
      'Gestion avancée',
      'Equipe et supervision multi-utilisateurs',
      'Pilotage plus structuré',
      "Site e-commerce lié à l'application",
      'Accompagnement à la mise en place',
    ],
  },
]

// ============================================
// SOUS-COMPOSANT — un avantage
// ============================================
function AvantageItem({ texte, couleur }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        style={{ flexShrink: 0, marginTop: '1px' }}>
        <path
          d="M4 13L9 18L20 6"
          stroke={couleur || '#F97316'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: '500',
        color: '#374151',
        lineHeight: '1.5',
      }}>
        {texte}
      </span>
    </div>
  )
}

// ============================================
// SOUS-COMPOSANT — une carte formule
// ============================================
function FormulaCard({ formule }) {
  return (
    <div
      className="formula-wrapper"
      style={{
        position: 'relative',
        paddingTop: '24px',
        flex: 1,
      }}
    >

      {/* DEMI-CERCLE — tous bleu foncé, moitié dehors */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50px',
        height: '24px',
        backgroundColor: '#1F2937',
        borderRadius: '24px 24px 0 0',
        zIndex: 2,
      }}/>

      {/* CARTE */}
      <div
        className="formula-card"
        style={{
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid #F3F4F6',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
          height: '100%',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px)'
          e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.14)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
        }}
      >

        {/* ESPACE en haut */}
        <div style={{ height: '20px' }}/>

        {/* NOM */}
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h3 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '22px',
            fontWeight: '800',
            color: '#1F2937',
            margin: 0,
          }}>
            {formule.nom}
          </h3>
        </div>

        {/* TRAIT orange */}
        <div style={{
          width: '300px',
          height: '1px',
          background: 'linear-gradient(90deg, #F97316, #FBBF24)',
          borderRadius: '2px',
          margin: '10px auto',
          flexShrink: 0,
        }}/>

        {/* DESCRIPTION */}
        <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: '20px' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#111113',
            margin: 0,
            lineHeight: '1.6',
          }}>
            {formule.description}
          </p>
        </div>

        {/* PRIX */}
        <div style={{
          background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
          padding: '20px 24px',
          textAlign: 'center',
          marginBottom: '24px',
        }}>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '36px',
            fontWeight: '900',
            color: '#FFFFFF',
            lineHeight: '1',
            letterSpacing: '-1px',
          }}>
            {formule.prix}{' '}
            <span style={{ fontSize: '20px', fontWeight: '700' }}>FCFA</span>
          </div>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.9)',
            marginTop: '4px',
          }}>
            par utilisateur / mois
          </div>
        </div>

        {/* AVANTAGES */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          flex: 1,
          padding: '0 24px',
        }}>
          {formule.avantages.map((av, i) => (
            <AvantageItem
              key={i}
              texte={av}
              couleur={formule.couleurIcone}
            />
          ))}
        </div>

        {/* BOUTON */}
        <div style={{ padding: '24px 24px 28px 24px' }}>
          
            <a href="#contact"
            style={{
              fontFamily: 'Inter, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '52px',
              borderRadius: '999px',
              background: ' #F97316',
              color: '#FFFFFF',
              fontSize: '15px',
              fontWeight: '700',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(249,115,22,0.3)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Commencer maintenant
          </a>
        </div>

      </div>
    </div>
  )
}

// ============================================
// COMPOSANT PRINCIPAL — OffresSection
// ============================================
function OffresSection() {
  return (
    <section
      id="pricing"
      style={{
        backgroundColor: '#F9FAFB',
        padding: '80px 0 100px 0',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <style>{`
        .offres-grid {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: stretch;
          overflow: visible;
        }

        .offres-titre { font-size: 36px; }

        @media (max-width: 1100px) {
          .offres-grid  { gap: 16px; }
          .offres-titre { font-size: 28px !important; }
        }

        @media (max-width: 768px) {
          .offres-grid {
            flex-direction: column !important;
            align-items: center !important;
          }
          .formula-wrapper {
            width: 100% !important;
            max-width: 420px !important;
          }
          .offres-titre { font-size: 24px !important; }
        }

        @media (max-width: 480px) {
          .formula-wrapper { max-width: 100% !important; }
          .offres-titre    { font-size: 22px !important; }
        }
      `}</style>

      <div className="container">

        {/* TITRE */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            className="offres-titre"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              color: '#1F2937',
              marginBottom: '12px',
            }}
          >
            Choisissez la{' '}
            <span style={{ color: '#F97316' }}>Formule</span>
            {' '}qui Vous Convient !
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#6B7280',
          }}>
            Des offres simples pour grandir à votre rythme
          </p>
        </div>

        {/* 3 CARTES */}
        <div className="offres-grid">
          {FORMULES.map((formule, index) => (
            <FormulaCard key={index} formule={formule} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default OffresSection