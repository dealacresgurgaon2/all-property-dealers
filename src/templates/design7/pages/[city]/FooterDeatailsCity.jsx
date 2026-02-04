import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCity } from "../../context/CityContext";

export default function DealersPage() {
  const router = useRouter();
  const { city: urlCity } = router.query;

  const { city, setCity, dealers, loading } = useCity();

  // URL change hote hi context update
  useEffect(() => {
    if (urlCity) {
      setCity(urlCity);
    }
  }, [urlCity]);

  if (loading) return <h2>Loading dealers...</h2>;

  return (
    <div>
      <h2>{city.toUpperCase()} Dealers</h2>

      {dealers.length === 0 && <p>No dealers found</p>}

      {dealers.map((dealer) => (
        <div key={dealer._id}>
          <h4>{dealer.name}</h4>
          <p>{dealer.address}</p>
        </div>
      ))}
    </div>
  );
}
