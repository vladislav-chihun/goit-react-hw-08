import { Route, Routes } from "react-router-dom"
import RegestrationForm from "./pages/RegestrationPage/RegestrationForm"
import HomePage from "./pages/HomePage/HomePage"
import {LoginPage} from "./pages/LoginPage/LoginPage"
import ContactsPage from "./pages/ContactsPage/ContactsPage"
import { useDispatch, useSelector } from "react-redux"
import { Suspense, useEffect } from "react"
import { refreshUser } from "./redux/auth/operations"
import { selectIsRefreshing } from "./redux/auth/selectors"
import RestrictedRoute from "./components/RestrictedRoute"
import PrivateRoute from "./components/PrivateRoute"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import Layout from "./components/Layout/Layout"
import css from "./App.module.css"


function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

 
  
  return isRefreshing ? (
    <div className={css.loading}>Loading...</div>
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