const CategorySelect = ({keys,handleSelect}) => {

    const categoryOptions = keys.map((key,index)=>{
        return <option key={index}>{key}</option>
    })

    return (
        <select onChange={handleSelect}>
            {categoryOptions}
        </select>
    )
}

export default CategorySelect