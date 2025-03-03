import { useEffect } from "react";
export default function GenerateData({setData, link}){
    useEffect(() => {
        fetch(link)
          .then((response) => response.json())
          .then((data) => {
              setData(data);
          })
          .catch((error) =>
            console.error("Erreur lors de la récupération des données :", error)
          );
          // Table according to the elements to be modified
      }, [setData, link]); 
      return null;     
}