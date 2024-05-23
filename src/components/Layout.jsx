import SearchBar from "./SearchBar"
import Nav from './NavBar'
import { PropTypes } from 'prop-types'
import SignUpForm from "./NewPlayerForm"


const Layout = ({ children }) => {

    return (
        <div className="min-h-screen">
            <Nav/>
            <div className="header">
                <h2>Welcome to the Puppy Bowl</h2>
                <h4>Click A Player Card For More Details!</h4>
                <h5>(or use the search bar below to find a particular player)</h5>
            </div>
            <SearchBar className="searchBar"/>
            <div className="players">
                {children}
            </div>
            <SignUpForm />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout