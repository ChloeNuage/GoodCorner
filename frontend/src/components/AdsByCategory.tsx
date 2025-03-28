
   // Accès aux paramètres de routes (ici on veut l'id de la catégorie)
import { useParams } from "react-router";

import { useState, useEffect } from "react";

// Composants
import AdCard from "./AdCard";
import { Ad, Category } from "../../../interfaces/entities";

// Communication avec la db
import axios from "axios"; 



const AdsByCategory = function () {
    const { categoryId } = useParams();
    console.log(categoryId);
  
    // Récupérer la catégorie
    const [category, setCategory] = useState<Category>({ id: 0, label: "" });
    const fetchCategory = async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories/${categoryId}`
      );
      setCategory(result.data);
    };
  
    // Récupérer les annonces de la catégorie souhaitée
    const [ads, setAds] = useState<Ad[]>([]);
    const fetchAds = async () => {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/ads/category/${categoryId}`
      );
      console.log(result.data);
      setAds(result.data);
    };
  
    // Empêcher les boucles infinies avec fetchCategory et fetchAds
    // On surveille le changement d'id de catégorie et on relance fetchCategory et fetchAds si l'idCategory change
    useEffect(() => {
      fetchCategory();
      fetchAds();
    }, [categoryId]);
  
    // Supprimer une annonce
    const deleteAd = async function (id: number) {
      await axios.delete(`${import.meta.env.VITE_API_URL}/ads/${id}`);
  
      // Re-render les annonces récentes
      fetchAds();
    };
  

        return (
            <>
            <h2>{category.label}</h2>
            <section className="recent-ads">
                {ads.map((ad) => (
                    <div key={ad.id}>
                        <AdCard
                            title={ad.title}
                            pictureUrl={ad.pictureUrl}
                            price={ad.price}
                            link={ad.link}
                        />
                    </div>
                ))}
            </section>
            </>
        )       
    }

    export default AdsByCategory;