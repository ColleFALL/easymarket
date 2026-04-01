import React from "react";
import phone from "../../assets/images/phone3.png";
import googlePlay from "../../assets/images/icone-google_play.png";
import appStore from "../../assets/images/icone-app_store.png";

function CTABanner() {
  return (
    <section
      id="cta"
      style={{
        background: "linear-gradient(135deg, #F97316 0%, #FBBF24 100%)",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "visible",
        zIndex: 1,
        // marginBottom: '120px',
      }}
    >
      <style>{`
        .cta-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 80px 0 80px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 48px;
          min-height: 480px;
          position: relative;
        }
        .cta-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-bottom: 60px;
          flex: 0 0 50%;
          z-index: 3;
        }
        .cta-right {
          flex: 0 0 45%;
          position: relative;
          align-self: stretch;
        }
        .cta-phone {
          position: absolute;
          top: 0;            /* ← aligné avec le haut du titre */
          bottom: auto;
          right: 0;
          width: 100%;
          height: 150%;      /* ← dépasse en bas de la section */
          object-fit: contain;
          object-position: top;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
          z-index: 10;
}
        .cta-title   { font-size: 46px; }
        .cta-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
        .cta-stores  { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }

        @media (max-width: 1024px) {
          .cta-wrapper { padding: 60px 40px 0 40px; }
          .cta-phone   { width: 300px !important; bottom: -60px !important; }
          .cta-title   { font-size: 28px !important; }
        }

        @media (max-width: 768px) {
          .cta-wrapper {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 40px 20px 40px 20px !important;
            min-height: auto !important;
          }
          .cta-left  { flex: none !important; width: 100%; padding-bottom: 0 !important; }
          .cta-right { display: none !important; }
          .cta-title { font-size: 26px !important; }
        }

        @media (max-width: 480px) {
          .cta-title   { font-size: 22px !important; }
          .cta-buttons { flex-direction: column !important; }
        }
      `}</style>

      <div className="cta-wrapper">
        {/* COLONNE GAUCHE */}
        <div className="cta-left">
          {/* TITRE */}
          <h2
            className="cta-title"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: "800",
              color: "#FFFFFF",
              lineHeight: "1.2",
              margin: 0,
            }}
          >
            Prêt à mieux piloter
            <br />
            votre commerce ?
          </h2>

          {/* SOUS-TITRE */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              color: "rgba(255,255,255,0.85)",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Rejoignez les commerçants qui utilisent EasyMarket pour suivre leurs
            chiffres, mieux contrôler leur activité et prendre de meilleures
            décisions.
          </p>

          {/* BOUTONS */}
          <div className="cta-buttons">
            {/* Bouton 1 — fond blanc, texte bleu foncé */}

            <a
              href="#contact"
              style={{
                fontFamily: "Inter, sans-serif",
                backgroundColor: "#FFFFFF",
                borderRadius: "999px",
                height: "52px",
                padding: "0 28px",
                color: "#1F2937",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Demander une démo
            </a>

            {/* Bouton 2 — transparent, bordure blanche */}

            <a
              href="#contact"
              style={{
                fontFamily: "Inter, sans-serif",
                backgroundColor: "transparent",
                borderRadius: "999px",
                height: "52px",
                padding: "0 28px",
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid rgba(255,255,255,0.9)",
                whiteSpace: "nowrap",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              Commencer maintenant
            </a>
          </div>

          {/* BADGES STORES */}
          <div className="cta-stores">
            <a
              href="#"
              style={{
                display: "inline-flex",
                borderRadius: "12px",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <img
                src={googlePlay}
                alt="Google Play"
                style={{ height: "60px", objectFit: "contain" }}
              />
            </a>

            <a
              href="#"
              style={{
                display: "inline-flex",
                borderRadius: "12px",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <img
                src={appStore}
                alt="App Store"
                style={{ height: "60px", objectFit: "contain" }}
              />
            </a>
          </div>
        </div>

        {/* COLONNE DROITE — téléphone */}
        <div className="cta-right">
          <img src={phone} alt="EasyMarket sur mobile" className="cta-phone" />
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
