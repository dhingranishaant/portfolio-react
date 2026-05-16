import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import AFK from "./pages/Afk";
import { Toaster } from "./components/ui/sonner";
import LoadingScreen from "./components/LoadingScreen";
import useTheme from "./hooks/useTheme";

function App() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="App">
      {/* Portfolio always mounted (no gating) */}
      <div className="opacity-0 animate-[fadeIn_700ms_ease-out_forwards]">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/afk" element={<AFK />} />
          </Routes>
        </BrowserRouter>
      </div>
  
      {/* Loading overlays on top */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <LoadingScreen theme={theme}/>
      </div>
  
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;