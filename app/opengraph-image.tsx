import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #f1f5f9 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top-left mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#64748b",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            V
          </div>
          <span>{siteConfig.shortName}</span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#0284c7",
              fontFamily: "monospace",
              marginBottom: 16,
            }}
          >
            {`// ${siteConfig.location}`}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: "#334155",
              marginBottom: 20,
              letterSpacing: "-0.01em",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Fullstack Software Engineer
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#475569",
              marginTop: 8,
            }}
          >
            &amp; DevSecOps Engineer
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#64748b",
              marginTop: 36,
              display: "flex",
            }}
          >
            8+ years · Banking · Fintech · Payments · Enterprise
          </div>
        </div>

        {/* Bottom-right soft glow accent */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -120,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </div>
    ),
    size,
  );
}
