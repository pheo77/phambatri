import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Plan } from "./screens/Plan";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Plan />
  </StrictMode>,
);
