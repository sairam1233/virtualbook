import {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/Home"
import ReactContext from './context/ReactContext'
import BookCard  from './components/BookCard'
import MyBookLib from './components/MyBookLib'
import './App.css'

const SampleData = {
    "books": [
    {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic",
    "rating": 4.7,
    "description": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
    "publication_year": 1925
    },
    {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "rating": 4.8,
    "description": "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
    "publication_year": 1960
    },
    {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "rating": 4.6,
    "description": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    "publication_year": 1949
    },
    {
      "id": 4,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Romance",
      "rating": 4.9,
      "description": "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
      "publication_year": 1813
      },
      {
      "id": 5,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Fiction",
      "rating": 4.3,
      "description": "A story about a young boy’s journey through the challenges of adolescence.",
      "publication_year": 1951
      }
      ]
  }

class App extends Component{

  state = {Data:SampleData.books, searchQ:'', presentId:"",myLib:[]}

  changeinp = (val)=>{
    this.setState({searchQ:val})
  }

  presentIdd = (val)=>{
    this.setState({presentId:val})
  }

  myLibfnc=(val)=>{
    this.setState((prevState)=>({myLib:[...prevState.myLib,val]}))
  }

  render(){
    const {Data,searchQ, presentId, myLib} = this.state
    return (
      <ReactContext.Provider value={{Data, presentId, myLib, searchQ, changeinp:this.changeinp, presentIdd: this.presentIdd, myLibfnc: this.myLibfnc}}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route  path="/book/:id" element={<BookCard/>}/>
              <Route  path="/myLibrary" element={<MyBookLib/>}/>
            </Routes>
          </BrowserRouter>
      </ReactContext.Provider>
    )
  }
}

export default App;
