import AdCard from "./AdCard";
import { Ad } from "../../../interfaces/entities";
import { useEffect, useState } from "react";
import axios from "axios";

const RecentsAds = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  const fetchAds = async () => {
    const result = await axios.get(`${import.meta.env.VITE_API_URL}/ads`);
  
    console.log(result);
    setAds(result.data);
  };

  useEffect(() => {
    fetchAds(); 
  } , []);
  

  return (
    <>
      <h2>Annonces récentes</h2>
      {/* <h3>Total: {total} €</h3> */}

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
  );
};

export default RecentsAds;