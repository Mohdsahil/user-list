import { Link } from 'react-router-dom'

const Header = () => {
  
    return (
        <>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <Link to="/" className="navbar-brand">Users List</Link>
            <form className="form-inline">
   
            </form>
        </nav>
        </>
    )
}

export default Header
