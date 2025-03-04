import { useEffect, useState } from "react";

export default function GenerateData({ setData, link }) {
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);
        
        if (!response.ok) {
          throw new Error(`Erreur réseau: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setError(error);
      }
    };
    fetchData();
  }, [link, setData]);
  if (error) {
    return <div>Erreur: {error.message}</div>;
  }
  return null;
}
