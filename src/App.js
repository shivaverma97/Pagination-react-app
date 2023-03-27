import { useState, useEffect } from 'react';
import './App.css';
import UserData from './UserData';
import axios from 'axios';
import Pagination from './Pagination';

function App() {

  const [userData, setUserData] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c=> cancel = c)
    }).then(res => {
      setUserData(res.data.results.map(p => p.name))
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setLoading(false)
    })

    return() => cancel()
  },[currentPageUrl])


  function setNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }

  function setPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      <UserData userData = {userData}/>
      <Pagination setNextPage = {nextPageUrl? setNextPage : null} setPrevPage = {prevPageUrl? setPrevPage : null}/>
    </>
  );
}

export default App;
