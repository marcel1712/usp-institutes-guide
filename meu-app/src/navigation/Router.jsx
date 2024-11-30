import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

// Importação de páginas
import Home from "../pages/Home";
import Group from "../pages/Group";
import Institute from "../pages/Institute";
import NotFound from "../pages/NotFound";


// Função para carregar dados do JSON
async function fetchInstitutes() {
  const response = await fetch("../../institutes_data.json"); // Caminho para o arquivo JSON
  return response.json();
}

function Router() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    async function loadRoutes() {
      const institutes = await fetchInstitutes();
      
      // Criar rotas para os institutos com base no JSON
      const instituteRoutes = institutes.map(institute => ({
        path: institute.path,
        element: <Institute acronym={institute.acronym} />,
      }));

      setRoutes([
        {
          path: "/",
          element: <Home />,
          errorElement: <NotFound />,
        },
     
        ...instituteRoutes, // Adicionar rotas dos institutos
      ]);
    }

    loadRoutes();
  }, []);

  // Somente renderizar o `RouterProvider` quando as rotas estiverem carregadas
  if (routes.length === 0) {
    return <div>Carregando...</div>;
  }

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default Router;
