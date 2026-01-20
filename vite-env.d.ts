/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string; // Vite automatically provides this
  // Add any other environment variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
