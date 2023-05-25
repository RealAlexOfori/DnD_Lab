import { useParams } from "react-router-dom"

const MonsterDisplay = ({data}) => {

    const {monster} = useParams()

    return (
        <>
        <h1>My name is {monster}!</h1>
        
        {/* <img src={data.image} alt="it's an image"/> */}
        
        </>

    )
}

export default MonsterDisplay