import React, { useState } from 'react'

// ============================================
// COMPOSANT PRINCIPAL — ContactSection
// ============================================
function ContactSection() {

  // État du formulaire
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    formule: '',
    comment: '',
    message: '',
    rgpd: false,
  })

  // Mise à jour des champs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulaire soumis :', form)
    alert('Message envoyé avec succès !')
  }

  // Style commun des inputs
  const inputStyle = {
    width: '100%',
    height: '48px',
    borderRadius: '12px',
    border: 'none',
    padding: '0 16px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    color: '#1F2937',
    backgroundColor: '#FFFFFF',
    outline: 'none',
  }

  // Style commun des labels
  const labelStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '13px',
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: '6px',
    display: 'block',
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#F9FAFB',
        padding: '80px 0',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >

        {/* TITRE + SOUS-TITRE */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '36px',
              fontWeight: '800',
              color: '#1F2937',
              marginBottom: '8px',
            }}
          >
            Contactez-nous
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              color: '#6B7280',
            }}
          >
            Notre équipe est là pour vous aider
          </p>
        </div>

        {/* CARTE FORMULAIRE — fond orange dégradé */}
        <div
          style={{
            background: 'linear-gradient(145deg, #F97316 0%, #FBBF24 100%)',
            borderRadius: '24px',
            padding: '36px 32px',
          }}
        >
          <form onSubmit={handleSubmit}>

            {/* LIGNE 1 — Nom + Email */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '16px',
              }}
            >
              {/* Nom */}
              <div>
                <label style={labelStyle}>Nom</label>
                <input
                  type="text"
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder=""
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>E-mail (optionnel)</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder=""
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
                placeholder=""
                required
              />
            </div>

            {/* LIGNE 3 — Formule */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                Sur quelle formule souhaitez-vous partir ? *
              </label>
              <select
                name="formule"
                value={form.formule}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  cursor: 'pointer',
                  appearance: 'none',
                }}
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="solo">Formule Solo — 5 900 FCFA</option>
                <option value="team">Formule Team — 15 000 FCFA</option>
                <option value="pro">Formule Pro — 25 000 FCFA</option>
              </select>
            </div>

            {/* LIGNE 4 — Comment connu */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                Comment vous avez connu ? *
              </label>
              <select
                name="comment"
                value={form.comment}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  cursor: 'pointer',
                  appearance: 'none',
                }}
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="reseaux">Réseaux sociaux</option>
                <option value="bouche">Bouche à oreille</option>
                <option value="internet">Recherche internet</option>
                <option value="partenaire">Via un partenaire</option>
                <option value="autre">Autre</option>
              </select>
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
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginBottom: '24px',
              }}
            >
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
              <label
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: '1.5',
                  cursor: 'pointer',
                }}
              >
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
                borderRadius: '12px',
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