import React, { useState } from 'react'

function ContactSection() {

  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    formule: '',
    comment: '',
    message: '',
    rgpd: false,
  })

  // État du toast
  const [toast, setToast] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  // Soumission — affiche le toast
  const handleSubmit = (e) => {
    e.preventDefault()
    setToast(true)
    setForm({
      nom: '', email: '', telephone: '',
      formule: '', comment: '', message: '', rgpd: false,
    })
    // Cache le toast après 4 secondes
    setTimeout(() => setToast(false), 4000)
  }

  const inputStyle = {
    width: '100%',
    height: '48px',
    borderRadius: '32px',
    border: 'none',
    padding: '0 16px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    color: '#1F2937',
    backgroundColor: '#FFFFFF',
    outline: 'none',
  }

  const labelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: '6px',
    display: 'block',
  }

  // Style wrapper select avec chevron
  const selectWrapper = {
    position: 'relative',
    width: '100%',
  }

  // Icône chevron réutilisable
  const ChevronIcon = () => (
    <div style={{
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="#6B7280" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
  )

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#F9FAFB',
        padding: '80px 0',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
      }}
    >
      <style>{`
        /* TOAST */
        .toast {
          position: fixed;
          bottom: 32px;
          right: 32px;
          background: #1F2937;
          color: white;
          padding: 16px 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-weight: 500;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          z-index: 9999;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from { transform: translateY(100px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }

        /* Responsive formulaire */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .contact-titre { font-size: 36px; }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-titre { font-size: 26px !important; }
          .toast {
            bottom: 16px !important;
            right: 16px !important;
            left: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-titre { font-size: 22px !important; }
        }
      `}</style>

      {/* TOAST — notification de succès */}
      {toast && (
        <div className="toast">
          {/* Icône check */}
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#F97316',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12L9 17L20 6"/>
            </svg>
          </div>
          Message envoyé avec succès ! On vous contacte bientôt 
        </div>
      )}

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px' }}>

        {/* TITRE */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            className="contact-titre"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '800',
              color: '#1F2937',
              marginBottom: '8px',
            }}
          >
            Contactez-nous
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#111113',
          }}>
            Notre équipe est là pour vous aider
          </p>
        </div>

        {/* CARTE FORMULAIRE */}
        <div style={{
          background: 'linear-gradient(145deg, #F97316 0%, #FBBF24 100%)',
          borderRadius: '24px',
          padding: '36px 32px',
        }}>
          <form onSubmit={handleSubmit}>

            {/* LIGNE 1 — Nom + Email */}
            <div className="contact-grid">
              <div>
                <label style={labelStyle}>Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>E-mail (optionnel)</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* LIGNE 2 — Téléphone */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                Numéro sur lequel on peut vous joindre *
              </label>
              <input
                type="tel"
                name="telephone"
                value={form.telephone}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            {/* LIGNE 3 — Formule avec chevron */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                Sur quelle formule souhaitez-vous partir ? *
              </label>
              <div style={selectWrapper}>
                <select
                  name="formule"
                  value={form.formule}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    paddingRight: '40px',
                  }}
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="solo">Formule Solo — 5 900 FCFA</option>
                  <option value="team">Formule Team — 15 000 FCFA</option>
                  <option value="pro">Formule Pro — 25 000 FCFA</option>
                </select>
                <ChevronIcon />
              </div>
            </div>

            {/* LIGNE 4 — Comment connu avec chevron */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                Comment vous avez connu ? *
              </label>
              <div style={selectWrapper}>
                <select
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    cursor: 'pointer',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    paddingRight: '40px',
                  }}
                  required
                >
                  <option value="">Sélectionnez</option>
                  <option value="reseaux">Réseaux sociaux</option>
                  <option value="bouche">Bouche à oreille</option>
                  <option value="internet">Recherche internet</option>
                  <option value="partenaire">Via un partenaire</option>
                  <option value="autre">Autre</option>
                </select>
                <ChevronIcon />
              </div>
            </div>

            {/* LIGNE 5 — Message */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>
                Pourriez-vous nous expliquer brièvement votre business ?
                ou nous dire vos attentes par rapport à EASYMARKET *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                style={{
                  ...inputStyle,
                  height: 'auto',
                  padding: '12px 16px',
                  resize: 'none',
                }}
                required
              />
            </div>

            {/* CASE RGPD */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              marginBottom: '24px',
            }}>
              <input
                type="checkbox"
                name="rgpd"
                checked={form.rgpd}
                onChange={handleChange}
                style={{
                  width: '16px',
                  height: '16px',
                  marginTop: '2px',
                  flexShrink: 0,
                  cursor: 'pointer',
                  accentColor: '#1F2937',
                }}
                required
              />
              <label style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.5',
                cursor: 'pointer',
              }}>
                En remplissant ce formulaire, j'autorise l'équipe EasyMarket à me
                contacter pour d'éventuelles discussions.
              </label>
            </div>

            {/* BOUTON ENVOYER */}
            <button
              type="submit"
              style={{
                width: '100%',
                height: '52px',
                borderRadius: '48px',
                border: 'none',
                backgroundColor: '#1E3A5F',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: '700',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              ENVOYER
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default ContactSection