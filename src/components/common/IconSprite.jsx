/**
 * Inline SVG sprite for brand icons (GitHub, LinkedIn, Mail, Kaggle).
 * Rendered once at the top of the app; use with <SpriteIcon id="i-github" />.
 */
export default function IconSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="hidden" aria-hidden="true">
      <symbol id="i-github" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0C17 4.93 18 5.25 18 5.25c.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"
        />
      </symbol>
      <symbol id="i-linkedin" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20H3.56V9h3.56v11zM5.34 7.56c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06c0 1.14-.92 2.07-2.06 2.07zM20.44 20h-3.55v-5.61c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V20h-3.56V9h3.42v1.5h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46V20z"
        />
      </symbol>
      <symbol id="i-mail" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 13.065L.015 4.5A2 2 0 0 1 2 3h20a2 2 0 0 1 1.985 1.5L12 13.065zM0 6.697v11.303A2 2 0 0 0 2 20h20a2 2 0 0 0 2-2V6.697l-12 8.57-12-8.57z"
        />
      </symbol>
      <symbol id="i-kaggle" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm3.93 19.59l-3.18-4.58-1.48 1.55v3.03h-2.66V9.41h2.66v6.6l4.33-4.62h3.26l-4.45 4.8 4.9 6.4h-3.38z"
        />
      </symbol>
    </svg>
  );
}

/** A single icon from the sprite above. */
export function SpriteIcon({ id, className }) {
  return (
    <svg className={className}>
      <use href={`#${id}`} />
    </svg>
  );
}
