import React, { useState, useRef } from "react";

const CLIENTS = [
  {
    nom: "All-In-Tech",
    description:
      "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnue pour nos services informatiques",
    lien: "#",
  },
  {
    nom: "All-In-Tech",
    description:
      "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnue pour nos services informatiques",
    lien: "#",
  },
  {
    nom: "All-In-Tech",
    description:
      "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnue pour nos services informatiques",
    lien: "#",
  },
  {
    nom: "All-In-Tech",
    description:
      "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnue pour nos services informatiques",
    lien: "#",
  },
  {
    nom: "All-In-Tech",
    description:
      "Une entreprise sénégalaise spécialisée dans la fourniture de solutions technologiques de pointe. Initialement reconnue pour nos services informatiques",
    lien: "#",
  },
];

// ============================================
// SOUS-COMPOSANT — une carte client
// ============================================
function ClientCard({ client, actif, onClick }) {
  return (
    <div
      onClick={onClick}
      className="client-card"
      style={{
        borderRadius: "16px",
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        background: actif
          ? "linear-gradient(160deg, #F97316 0%, #FBBF24 100%)"
          : "#FFFFFF",
        border: actif ? "none" : "1.5px solid #E5E7EB",
        boxShadow: actif
          ? "0 8px 24px rgba(249,115,22,0.25)"
          : "0 2px 8px rgba(0,0,0,0.05)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        scrollSnapAlign: "start",
      }}
    >
      {/* NOM */}
      <h3
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          fontWeight: "700",
          color: actif ? "#FFFFFF" : "#1F2937",
          margin: "0 0 12px 0",
        }}
      >
        {client.nom}
      </h3>

      {/* TRAIT séparateur */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: actif ? "rgba(255,255,255,0.4)" : "#E5E7EB",
          marginBottom: "16px",
          flexShrink: 0,
        }}
      />

      {/* DESCRIPTION */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          color: actif ? "rgba(255,255,255,0.85)" : "#6B7280",
          lineHeight: "1.7",
          flex: 1,
          margin: "0 0 16px 0",
        }}
      >
        {client.description}
      </p>

      {/* LIEN */}

      <a
        href={client.lien}
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          fontWeight: "600",
          color: actif ? "#FFFFFF" : "#F97316",
          textDecoration: "none",
          alignSelf: "flex-start",
          marginTop: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        Visiter le site
      </a>
    </div>
  );
}

// ============================================
// COMPOSANT PRINCIPAL — ClientsSection
// ============================================
function ClientsSection() {
  const [actifIndex, setActifIndex] = useState(0);
  const carouselRef = useRef(null);

  // ---- Scroll d'une carte vers la gauche ----
  const precedent = () => {
    if (actifIndex > 0) {
      const nouvelIndex = actifIndex - 1;
      setActifIndex(nouvelIndex);
      scrollVers(nouvelIndex);
    }
  };

  // ---- Scroll d'une carte vers la droite ----
  const suivant = () => {
    if (actifIndex < CLIENTS.length - 1) {
      const nouvelIndex = actifIndex + 1;
      setActifIndex(nouvelIndex);
      scrollVers(nouvelIndex);
    }
  };

  // ---- Scroll smooth vers la carte ciblée ----
  const scrollVers = (index) => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll(".client-card");
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }
  };

  const peutAllerGauche = actifIndex > 0;
  const peutAllerDroite = actifIndex < CLIENTS.length - 1;

  return (
    <section
      id="clients"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "80px 0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <style>{`
        .clients-carousel {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding-bottom: 4px;
        }
        .clients-carousel::-webkit-scrollbar {
          display: none;
        }

        /* Taille des cartes selon écran */
.client-card {
  width: 260px;
  min-width: 260px;
  min-height: 311px;
}

@media (max-width: 1024px) {
  .client-card {
    width: 260px !important;
    min-width: 260px !important;
    min-height: 311px !important;
  }
}

@media (max-width: 768px) {
  .client-card {
    width: 260px !important;
    min-width: 260px !important;
    min-height: 311px !important;
  }
  .clients-fleches {
    justify-content: center !important;
  }
  .clients-titre {
    font-size: 28px !important;
  }
}

@media (max-width: 480px) {
  .client-card {
    width: 260px !important;
    min-width: 260px !important;
    min-height: 311px !important;
  }
  .clients-titre {
    font-size: 24px !important;
  }
}
      `}</style>

      <div className="container">
        {/* TITRE */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            className="clients-titre"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "36px",
              fontWeight: "800",
              color: "#1F2937",
              marginBottom: "12px",
            }}
          >
            Ils utilisent <span style={{ color: "#F97316" }}>EasyMarket</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              color: "#6B7280",
            }}
          >
            Des commerçants qui utilisent EasyMarket au quotidien
          </p>
        </div>

        {/* CAROUSEL — scroll horizontal */}
        <div className="clients-carousel" ref={carouselRef}>
          {CLIENTS.map((client, index) => (
            <ClientCard
              key={index}
              client={client}
              actif={index === actifIndex}
              onClick={() => {
                setActifIndex(index);
                scrollVers(index);
              }}
            />
          ))}
        </div>

        {/* FLÈCHES NAVIGATION */}
        <div
          className="clients-fleches"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "32px",
          }}
        >
          {/* Flèche gauche */}
          <button
            onClick={precedent}
            disabled={!peutAllerGauche}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: `1.5px solid ${peutAllerGauche ? "#D1D5DB" : "#E5E7EB"}`,
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: peutAllerGauche ? "pointer" : "not-allowed",
              opacity: peutAllerGauche ? 1 : 0.4,
              transition: "all 0.2s",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              if (peutAllerGauche) {
                e.currentTarget.style.borderColor = "#F97316";
                e.currentTarget.style.backgroundColor = "#FFF7ED";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = peutAllerGauche
                ? "#D1D5DB"
                : "#E5E7EB";
              e.currentTarget.style.backgroundColor = "#FFFFFF";
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={peutAllerGauche ? "#1F2937" : "#9CA3AF"}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            onClick={suivant}
            disabled={!peutAllerDroite}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: peutAllerDroite ? "#F97316" : "#FED7AA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: peutAllerDroite ? "pointer" : "not-allowed",
              transition: "all 0.2s",
              padding: 0,
            }}
            onMouseEnter={(e) => {
              if (peutAllerDroite)
                e.currentTarget.style.backgroundColor = "#EA6A0A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = peutAllerDroite
                ? "#F97316"
                : "#FED7AA";
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
