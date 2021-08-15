import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './DetailsPage.css';
import UserContext  from '../AppContext';

function DetailsPage(props) {

  const [Contents,setContents] = useState({});  
  //const [img,setImg] = useState('');  
  useEffect(() => {
    if(props.match.params.type == 'tvshowsList'){
      var url =  'http://localhost:8080/DVSTORE/gettvshow/'+props.match.params.id;
    }else{
      var url =  'http://localhost:8080/DVSTORE/getmovie/'+props.match.params.id;
    }
   
    fetch(url,
    {headers: { 'Authorization': "Bearer "+localStorage.getItem('token') }}
)
    .then(res => res.json())
    .then(response => setContents(response));
}, []);

    return (
      <div className="outerDetailsPage">
        <div className="DetailsPage">
          <img className="" key={Contents.id} src={window.location.origin+Contents.cover_path} alt={Contents.name}/>
          <div className=''>
              <pre>{Contents.synopsis}</pre>
          </div>
        </div>
    </div>
    )
};
    

export default DetailsPage;
