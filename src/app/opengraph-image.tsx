import { ImageResponse } from "next/og";

export const alt = "Rubix360 — Transformando Complexidade em Inteligência";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social card (1200×630). Copy kept accent-free to render cleanly with
// the built-in font (no external font fetch needed).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%", width: "100%", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "80px",
          background: "linear-gradient(135deg, #07112e 0%, #0a4eff 100%)", color: "#fff",
        }}
      >
        <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -2 }}>Rubix360</div>
        <div style={{ fontSize: 42, marginTop: 16, lineHeight: 1.15, maxWidth: 980 }}>
          Conectamos sistemas, dados e IA da sua empresa
        </div>
        <div style={{ fontSize: 30, marginTop: 26, opacity: 0.92, maxWidth: 980 }}>
          Software sob medida, cloud e produtos SaaS.
        </div>
        <div style={{ fontSize: 26, marginTop: 40, opacity: 0.85 }}>www.rubix360.com.br</div>
      </div>
    ),
    size,
  );
}
