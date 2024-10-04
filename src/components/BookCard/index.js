import { useParams } from 'react-router-dom';
import ReactContext from '../../context/ReactContext';
import Header from '../Header';
import "./index.css"

const BookCard =(props)=>{
  const { id } = useParams();

  return (
    <ReactContext.Consumer>
        {value=>{
            const {Data,myLibfnc} = value 
            // eslint-disable-next-line eqeqeq
            const filter1 = Data.filter(l=>(l.id == id))
            const {author,description,genre, publication_year,rating,title} = filter1[0]
            function addlibfnc(){
                myLibfnc(filter1[0])
            }
            return(
                <>
                    <Header/>
                    <div className='bg2'> 
                      <h1 className='head1'>{title}</h1>
                      <div className='bookit'>
                        <h1 className='head2'>Title: <span>{title}</span> </h1>
                        <h1 className='head2'>Author: <span>{author}</span></h1>
                        <h1 className='head2'>Genre: <span>{genre}</span></h1>
                        <h1 className='head2'>Description: <span>{description}</span></h1>
                        <h1 className='head2'>Publication_year: <span>{publication_year}</span></h1>
                        <h1 className='head2'>Rating: <span>{rating}</span></h1>
                      </div>
                      <button className='btn1' type='button' onClick={addlibfnc}>Add to MyLibrary</button>
                    </div>
                </>
            )
        }}
    </ReactContext.Consumer>
  )
}


export default BookCard
