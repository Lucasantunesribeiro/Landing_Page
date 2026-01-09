import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Sites e Landing Pages que Convertem | Lucas Antunes";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            textAlign: "center",
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                background: "white",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "60px",
                fontWeight: "bold",
                color: "#6366f1",
              }}
            >
              LA
            </div>
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: "70px",
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.2,
              maxWidth: "1000px",
            }}
          >
            Landing pages no ar em 72h — feitas pra converter cliques em WhatsApp
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "32px",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "900px",
            }}
          >
            Entrega em 72h • Pacotes a partir de R$ 590 • Mobile-first + SEO
          </div>

          {/* Badges */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "rgba(251, 191, 36, 1)",
                padding: "12px 24px",
                borderRadius: "100px",
                fontSize: "24px",
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              ⚡ Entrega 72h
            </div>
            <div
              style={{
                background: "rgba(251, 191, 36, 1)",
                padding: "12px 24px",
                borderRadius: "100px",
                fontSize: "24px",
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              ✓ Mobile-first
            </div>
            <div
              style={{
                background: "rgba(251, 191, 36, 1)",
                padding: "12px 24px",
                borderRadius: "100px",
                fontSize: "24px",
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              🎯 Foco em conversão
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
