import { createContext } from "react";
import { useState } from "react";
import { apiUrlLink } from "../apiurl";
// context is nothing but snapshot of data at a time
//when we create the conext for the app every compoent inside the app compoenent can access the data

// step-1
export const AppContext = createContext(); //creation of context

export default function AppContextProvoider({ children }) {
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [totalPage, setTotalPage] = useState(null);
  let [posts, setPosts] = useState([]);

  async function fetchDateViaApi(page = 1) {
    try {
      setLoading(true);
      let data = await fetch(`${apiUrlLink}?page=${page}`);
      let output = data.json();
      setTotalPage(output.totalPages);
      setPosts(output.posts);
      setPage(output.page);
      setLoading(false);
    } catch (error) {
      console.log("error in fetching the data");
    }
  }
  let valueObj = {
    loading,
    setLoading,
    page,
    setPage,
    totalPage,
    setTotalPage,
    posts,
    setPosts,
    fetchDateViaApi,
    handlePageChange,
  };
  function handlePageChange(page) {
    setPage(page);
    fetchDateViaApi();
  }
  //   step-2
  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
}
