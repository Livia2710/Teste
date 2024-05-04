// Importação dos componentes necessários
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/LoginCadastro";
import Playlists from "./Components/Playlists";
import Player from "./Components/Player"

// Componente funcional principal App
function App() {
  return (
    <div className="App">
      {/* Componente Router do React Router */}
      <Router>
        {/* Componente Header */}
        <Header />

        {/* Definição das rotas */}
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/" element={<Home />} />

          {/* Rota para a página "Login/Cadastro" */}
          <Route path="/LoginCadastro" element={<Login />} />

          {/* Rota para a página "Playlist" */}
          <Route path="/playlists" element={<Playlists />} />

            {/* Rota para a página "Player" */}
            <Route path="/player" element={<Player />} />

        </Routes>
        
      </Router>
    </div>
  );
}

// Exportação do componente App
export default App;