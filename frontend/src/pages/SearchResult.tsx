import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Ad } from "../../../interfaces/entities";
import AdCard from "../components/AdCard";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [ads, setAds] = useState<Ad[]>([]);

  const fetchAds = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/ads/search/${query}`
      );
      setAds(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, [query]);

  return (
    <>
      <h2>Recherche</h2>

      <section className="recent-ads">
        {ads.map((ad) => (
          <div key={ad.id}>
            <AdCard
              title={ad.title}
              pictureUrl={ad.pictureUrl}
              price={ad.price}
              link={`${import.meta.env.VITE_FRONT_URL}/ad/${ad.id}`}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default SearchResult;