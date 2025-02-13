import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SinglePlayer = () => {
  const [player, setPlayer] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players/${id}`
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Player not found");
        }
        setPlayer(data.data.player);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : player ? (
        <>
        <div className="player-card" key={player.id}>
            <img
                className="player-image"
                src={player.imageUrl}
                alt={player.name}
            />
            <div className="player-details">
                <h2>Name: {player.name}</h2>
                    <p>Breed: {player.breed} </p>
                    <p>Status: {player.status}</p>
            </div>
        </div>
        </>
      ) : (
        <h1>...Loading</h1>
      )}
    </>
  );
};

export default SinglePlayer
