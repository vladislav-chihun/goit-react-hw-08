import { Route, Routes } from "react-router-dom"
import RegestrationForm from "./components/RegestrationForm/RegestrationForm"
import HomePage from "./components/HomePage/HomePage"
import {LoginPage} from "./components/LoginPage/LoginPage"
import ContactsPage from "./components/ContactsPage/ContactsPage"
import { useDispatch, useSelector } from "react-redux"
import { Suspense, useEffect } from "react"
import { refreshUser } from "./redux/auth/operations"
import { selectIsRefreshing } from "./redux/auth/selectors"
import RestrictedRoute from "./components/RestrictedRoute"
import PrivateRoute from "./components/PrivateRoute"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"
import Layout from "./components/Layout/Layout"


function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

 
  
  return isRefreshing ? (
    <div>Loading...</div>
  ):(
      <Layout>
        <Suspense>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={<RegestrationForm />} />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
          <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </Suspense>
        </Layout>
  )
}
export default App