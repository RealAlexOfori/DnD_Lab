import { Link } from "react-router-dom";

const MonsterList = ({data}) => {

    let parsedList;
    if (data) {
        parsedList = data.map((item,index)=>{
            return <li key={index}>
                    <Link to={`/${item.name}`}>{item.name}</Link>
                   </li>
        })
    } else {
        return null
    }


    return (
        <ul>
            {parsedList}
        </ul>
    )
}

export default MonsterList