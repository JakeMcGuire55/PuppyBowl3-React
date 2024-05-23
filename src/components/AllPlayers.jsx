import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";

const AllPlayers = () => {
    const [players, setAllPlayers] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const searchTerm = useSelector(state => state.searchTerm)
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()))

    useEffect(() => {
        async function getData(){
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players")
                const data = await response.json()
                setAllPlayers(data.data.players)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getData()
    }, [])
    return (
        <div>{loading ? (<h1>Loading Players</h1>) : (
            <div className="players">
                {filteredPlayers?.map((player)=>{
                    return (
                        <div className="player-card" key={player.id} onClick={()=>navigate(`/player/${player.id}`)}>
                            <img
                            className="player-image"
                            src={player.imageUrl}
                            alt={player.name}
                            />
                            <div className="player-details">
                                <h2>Name: {player.name}</h2>
                                <p>Breed: {player.breed} </p>
                                <p>Status: {player.status.toUpperCase()}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )}</div>
    )
}

export default AllPlayers