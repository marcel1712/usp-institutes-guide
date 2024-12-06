import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Page() {
  const [group, setGroup] = useState(null); // Estado para armazenar os dados do grupo
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento
  const { instituteId, groupId } = useParams(); // Obtém o ID do instituto e do grupo da URL
  const navigate = useNavigate();

  const fetchInstitutes = useCallback(async () => {
    try {
      const response = await fetch("/institutes_data.json"); 
      const data = await response.json();

      // Procurar o instituto pelo ID
      const institute = data.institutes.find(
        (institute) => institute.id.toString() === instituteId
      );

      if (institute) {
        // Procurar o grupo dentro do instituto
        const groupData = institute.groups.find(
          (group) => group.id.toString() === groupId
        );

        if (groupData) {
          setGroup(groupData); 
        } else {
          navigate("/notfound"); 
        }
      } else {
        navigate("/notfound"); 
      }
    } catch (error) {
      console.error("Erro ao buscar os dados dos institutos:", error);
      navigate("/notfound"); 
    } finally {
      setLoading(false); 
    }
  }, [instituteId, groupId, navigate]);

  useEffect(() => {
    setLoading(true); 
    fetchInstitutes();
  }, [fetchInstitutes]); 

  if (loading) {
    return <div>Carregando...</div>; 
  }

  if (!group) {
    return <div>Grupo não encontrado.</div>; 
  }

  return (
    <div className="page-container">
    <section className="hero-section">
      <div className="hero-content">
        <h1>{group.name}</h1>
        <img src={group.logo} alt="Frente de Estudo" /> 
        <p>{group.detailedDescription}</p>
      </div>
    </section>

    <section className="about-section">
      <div className="about-content">
        <h2>Sobre o {group.name}</h2>
        <p>{group.description}</p>
      </div>
    </section>


    <section className="other-activities">
      <div className="activities-card">
        <h3>Outras Atividades</h3>
        <p>{group.otherActivities}</p> 
      </div>
    </section>

    <section className="social-media">
      {group.socialmidias && group.socialmidias.length > 0 && (
        <div>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
            <a href={group.site} target="_blank" rel="noopener noreferrer">
                 site
                </a>
            </li>
            {group.socialmidias.map((social, index) => (
              <li key={index}>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  </div>
  );
}

export default Page;
