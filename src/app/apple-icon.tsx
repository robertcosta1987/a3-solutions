import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon (also used as the Organization logo in JSON-LD).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a4eff", color: "#fff", fontSize: 110, fontWeight: 800 }}>
        R
      </div>
    ),
    size,
  );
}
