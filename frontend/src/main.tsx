import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global.css'
// import './utils/rem.js'

createRoot(document.getElementById('root')!).render(
    <App />
)
