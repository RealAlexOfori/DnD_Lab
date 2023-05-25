import MonsterList from "../components/MonsterList"
import MonsterDisplay from "../components/MonsterDisplay"
import { useEffect, useState } from "react"
import CategorySelect from "../components/CategorySelect"
import NavBar from "../components/NavBar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

const MonsterContainer = () => {

    // base page
    const [url, setUrl] = useState('https://www.dnd5eapi.co/api/')
    const [allData, setAllData] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")

    const [pageData, setPageData] = useState([])
    const [arrayData, setArrayData] = useState([])
    const [monsters, setMonsters] = useState([])

    const keyList = Object.keys(allData)

    // console.log(keyList)
    useEffect(()=> {
        getData()
    },[]) 
    useEffect(()=> {
        getPageData()
    },[selectedCategory]) 

    const getData = function() {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllData(data) )
            // { keyword:value,keyword:value}
    }
    const getPageData = function() {
        fetch(url+selectedCategory)
            .then(response => response.json())
            .then(data => setPageData(data.results) )
    }

    const handleSelect = (evt) => {
        setSelectedCategory(evt.target.value)
    }

    console.log(`All Data: ${allData}`)
    console.log(`Page Data: ${pageData}`)

// having url + selectedCategory

    return (
        <>
            <CategorySelect keys={keyList} handleSelect={handleSelect}/>
            <MonsterList data={pageData} />
        </>
    )
}

export default MonsterContainer