import { Route, Routes } from "react-router-dom"
import RegestrationForm from "./components/RegestrationForm/RegestrationForm"
import Header from "./components/Header/Header"
import HomePage from "./components/HomePage/HomePage"
import {LoginPage} from "./components/LoginPage/LoginPage"
import ContactsPage from "./components/ContactsPage/ContactsPage"


function App() {
  return (
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