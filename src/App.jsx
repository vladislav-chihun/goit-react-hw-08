import { Route, Routes } from "react-router-dom"
import RegestrationForm from "./components/RegestrationForm/RegestrationForm"
import ContactList from "./components/ContactList/ContactList"
import Header from "./components/Header/Header"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactForm from "./components/ContactForm/ContactForm"
import HomePage from "./components/HomePage/HomePage"
import {LoginPage} from "./components/LoginPage/LoginPage"


function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegestrationForm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/tasks" element={<ContactList />} />
      <Route path="/tasks" element={<ContactForm />} />
    </Routes>
      </div>

  )
}
export default App