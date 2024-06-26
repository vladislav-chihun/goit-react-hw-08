import { Route, Routes } from "react-router-dom"
import RegestrationForm from "./components/RegestrationForm/RegestrationForm"
import Header from "./components/Header/Header"
import HomePage from "./components/HomePage/HomePage"
import {LoginPage} from "./components/LoginPage/LoginPage"
import ContactsPage from "./components/ContactsPage/ContactsPage"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { refreshUser } from "./redux/auth/operations"
import { selectIsRefreshing } from "./redux/auth/selectors"


function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

 
  
  return isRefreshing ? (
    <div>Loading...</div>
  ):(
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegestrationForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/tasks" element={<ContactsPage />} />
    </Routes>
      </div>

  )
}
export default App