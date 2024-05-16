// Importação dos componentes necessários
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/LoginCadastro";
import Playlists from "./Components/Playlists";

// Componente funcional principal App
function App() {
  return (
    <div className="App">
      {/* Componente Router do React Router */}
      <Router>
        {/* Definição das rotas */}
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<Home />} />

          {/* Rota para a página "Login/Cadastro" */}
          <Route path="/LoginCadastro" element={<Login />} />

          {/* Rota para a página "Playlist" */}
          <Route path="/playlists" element={<Playlists />} />

        </Routes>
        
      </Router>
    </div>
  );
}

// Exportação do componente App
export default App;