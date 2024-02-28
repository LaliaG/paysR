import {createBrowserRouter} from "react-router-dom"
import CountryList from "./components/CountryList"
//import CountryDetail from "./components/CountryDetail"
//import CountrySearch from "./components/CountrySearch"


const router = createBrowserRouter([
  {
    path: "/",
    element: <CountryList />
  },
//    {
//      path: "/search",
//      element: <CountrySearch/>
//    },
//   {
//     path: "/detail/:id",
//     element: <CountryDetail />
//   },
])

export default router