import AppRouter from "./routers/AppRouter";
import AuthProvider from "./autentificarUser/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/maquetacion/layout";
//authprovider retorna a sus hijos el valor de un contexto
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
