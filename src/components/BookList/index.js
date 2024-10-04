import { Link } from 'react-router-dom'
import ReactContext from '../../context/ReactContext'
import { IoIosStar } from "react-icons/io";

import "./index.css"


const BookList = (props)=>(
    <ReactContext.Consumer>
        {value=>{
            const {dt} = props
            const {title,id,rating} = dt
            return(
                <Link className='link' to={`/book/${id}`}>
                    <div className='bg4'>
                    <h1>{title}</h1>
                    <p><IoIosStar className='ic'/> {rating}</p>
                    </div>
                </Link>
            )
        }}
    </ReactContext.Consumer>
)

export default BookList