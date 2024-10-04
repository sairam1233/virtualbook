import Header from "../Header"
import ReactContext from "../../context/ReactContext"
import BookList from "../BookList"
import "./index.css"

const MyBookLib  = ()=>(
    <ReactContext.Consumer>
        {value=>{
            const {myLib} = value 
            console.log(myLib)
            return(
                <>
                <Header/>
                <div className="bg1">
                    <h1 className="head">My Library</h1>
                    {myLib.map(l=>(
                        <BookList dt={l} key={l.id}/>
                    ))}
                </div>
                </>
                
            )
        }}
    </ReactContext.Consumer>
)

export default MyBookLib