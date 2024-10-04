import { Link } from 'react-router-dom'
import { FaBook } from "react-icons/fa6";
import "./index.css"

const Header = ()=>{
    return(
        <nav className="nav">
            <div className='nv'>
                <FaBook className='icon' />
                <Link className='link' to="/"><h1 className='h111'>Book Library</h1></Link>
            </div>
            <ul>
                <Link className='link' to="/"><li>Home</li></Link>
                <Link className='link' to="/myLibrary">
                    <li>My Library</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header