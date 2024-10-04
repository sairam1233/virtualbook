import "./index.css"
import ReactContext from "../../context/ReactContext"
import BookList from "../BookList"
import Header from "../Header"

const Home = () => (
  <ReactContext.Consumer>
    {value=>{
      const {Data, changeinp,searchQ} = value
      const onChange1 = (event)=>{
        changeinp(event.target.value)
      }
      const filter1 = Data.filter(l=>(l.title.toLowerCase().includes(searchQ.toLocaleLowerCase())))
      return(
        <div className="bgContainer">
          <Header/>
          <div className="search">
            <input className="inp" value={searchQ} placeholder="Search" type="search" onChange={onChange1}/>
          </div>
          <div className="bookitems">
              {filter1.map(l=>(
                <BookList dt={l} key={l.id}/>
              ))}
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Home