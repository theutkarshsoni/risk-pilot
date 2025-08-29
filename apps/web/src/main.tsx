import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppThemeProvider } from './theme'
import App from './App'

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("../../../packages/mocks/src/browser");
  worker.start();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StrictMode>,
)
