import { ImageResponse } from "next/og";
import { dictionaries, profile, siteUrl } from "@/lib/data";

export const alt = `${profile.name} — ${dictionaries.pt.hero.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#171717",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="88" height="88" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="9" fill="#262626" />
          <path
            d="M9 22V11l7 7 7-7v11"
            stroke="#ededed"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="23" cy="22" r="1.6" fill="#a3a3a3" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#ededed",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#a3a3a3",
              marginTop: 20,
              letterSpacing: "-0.01em",
            }}
          >
            {dictionaries.pt.hero.role}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: "#8a8a8a" }} />
          <div style={{ fontSize: 28, color: "#737373" }}>
            {siteUrl.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}
