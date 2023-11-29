import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsPage from "./components/NewsPage/NewsPage";
import axios from "axios";
import {API_DOMAIN} from "./config/api";
import {useEffect, useState} from "react";

function App() {
 const [navs, setNavs] = useState([])
  let categories = []
  const getCategories = async() => {
    const {data} = await axios.get(`${API_DOMAIN}/tags`)
    data.forEach((element) => {
      categories.push({nav: element.name, page: `/categories/${element.id}`})
    })
    setNavs(categories)
  }

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <Router>
        <NavBar navs={navs} />
        <Routes>
            <Route path="/" exact element={<News isRoot={true} navs={navs} />} />
            <Route path="/categories/:categoryId" element={<News navs={navs}/>} />
            <Route path="/news/:newsId" element={<NewsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
