import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
          color: "#38bdf8",
          fontSize: 40,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          borderRadius: 12,
        }}
      >
        V
      </div>
    ),
    size,
  );
}
