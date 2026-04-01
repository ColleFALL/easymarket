import React from 'react'

// ============================================
// DONNÉES — les 3 formules
// ============================================
const FORMULES = [
  {
    nom: 'Formule Solo',
    description: 'Pour les commerçants qui veulent démarrer simplement.',
    prix: '5 900',
    avantages: [
      'Un utilisateur',
      'Gestion des ventes',
      'Gestion du stock simplifiée',
      'Suivi des dépenses',
      'Tableau de bord intuitif',
      'Factures et tickets',
    ],
    actif: false,
  },
  {
    nom: 'Formule Team',
    description: 'Pour les équipes qui veulent mieux collaborer.',
    prix: '15 000',
    avantages: [
      'Plusieurs comptes utilisateurs',
      'Accès adaptés selon les rôles',
      'Suivi centralisé de l\'activité',
      'Contrôle renforcé',
      'Tableau de bord partagé',
    ],
    actif: true,
  },
  {
    nom: 'Formule Team',
    description: 'Pour les commerces qui veulent aller plus loin.',
    prix: '25 000',
    avantages: [
      'Gestion avancée',
      'Equipe et supervision multi-utilisateurs',
      'Pilotage plus structuré',
      'Site e-commerce lié à l\'application',
      'Accompagnement à la mise en place',
    ],
    actif: false,
  },
]

// ============================================
// SOUS-COMPOSANT — un avantage
// ============================================
function AvantageItem({ texte, actif }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '3px' }}>
        <path
          d="M5 13l4 4L19 7"
          stroke={actif ? '#FFFFFF' : '#F97316'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '13px',
        color: actif ? 'rgba(255,255,255,0.9)' : '#374151',
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
      style={{
        width: '340px',
        minHeight: '580px',
        borderRadius: '20px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: '#FFFFFF',
        boxShadow: formule.actif
          ? '0 16px 40px rgba(0,0,0,0.12)'
          : '0 4px 20px rgba(0,0,0,0.06)',
        border: '1px solid #F3F4F6',
        transform: formule.actif ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'transform 0.3s',
      }}
    >

      {/* DEMI-CERCLE DÉCORATIF */}
      <div style={{
        width: '48px',
        height: '24px',
        backgroundColor: formule.actif ? '#1F2937' : '#E5E7EB',
        borderRadius: '0 0 48px 48px',
        margin: '0 auto',
      }}/>

      {/* NOM + DESCRIPTION */}
      <div style={{ textAlign: 'center' }}>
        <h3 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '20px',
          fontWeight: '700',
          color: '#1F2937',
          margin: '0 0 8px 0',
        }}>
          {formule.nom}
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          color: '#6B7280',
          margin: 0,
          lineHeight: '1.5',
        }}>
          {formule.description}
        </p>
      </div>

      {/* PRIX */}
      <div style={{
        backgroundColor: formule.actif ? '#F97316' : '#FFF7ED',
        borderRadius: '12px',
        padding: '16px',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '28px',
          fontWeight: '800',
          color: formule.actif ? '#FFFFFF' : '#F97316',
          lineHeight: '1',
        }}>
          {formule.prix}{' '}
          <span style={{ fontSize: '16px', fontWeight: '700' }}>FCFA</span>
        </div>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: formule.actif ? 'rgba(255,255,255,0.85)' : '#9CA3AF',
          marginTop: '4px',
        }}>
          par utilisateur / mois
        </div>
      </div>

      {/* AVANTAGES */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        flex: 1,
      }}>
        {formule.avantages.map((av, i) => (
          <AvantageItem key={i} texte={av} actif={false} />
        ))}
      </div>

      {/* BOUTON */}
      
        <a href="#contact"
        style={{
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '48px',
          borderRadius: '999px',
          backgroundColor: '#F97316',
          color: '#FFFFFF',
          fontSize: '14px',
          fontWeight: '700',
          textDecoration: 'none',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Commencer maintenant
      </a>

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
        padding: '80px 0',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
      }}>

        {/* TITRE */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '36px',
            fontWeight: '800',
            color: '#1F2937',
            marginBottom: '12px',
          }}>
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
        <div style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          paddingBottom: '12px',
        }}>
          {FORMULES.map((formule, index) => (
            <FormulaCard key={index} formule={formule} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default OffresSection