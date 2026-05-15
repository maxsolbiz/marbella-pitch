import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Marbella AI — Property Intelligence Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A0E1A 0%, #111827 50%, #0A0E1A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid rgba(201,168,76,0.4)",
            borderRadius: "12px",
            display: "flex",
          }}
        />
        <div style={{ color: "#C9A84C", fontSize: "28px", fontWeight: "bold", marginBottom: "24px", letterSpacing: "4px" }}>
          M · AI
        </div>
        <div style={{ color: "#F8FAFC", fontSize: "64px", fontWeight: "bold", textAlign: "center", lineHeight: 1.1, marginBottom: "16px" }}>
          AI Property<br />
          <span style={{ color: "#C9A84C" }}>Intelligence</span> Platform
        </div>
        <div style={{ color: "#94A3B8", fontSize: "24px", textAlign: "center" }}>
          Marbella · Costa del Sol · Spain
        </div>
        <div style={{ display: "flex", gap: "60px", marginTop: "48px" }}>
          {[["€2.8B+", "Market Cap"], ["300+", "Broker Target"], ["6", "Languages"]].map(([val, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#C9A84C", fontSize: "32px", fontWeight: "bold" }}>{val}</div>
              <div style={{ color: "#94A3B8", fontSize: "14px", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
