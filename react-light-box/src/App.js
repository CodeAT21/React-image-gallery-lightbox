import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Lightbox from './Lightbox';
import './App.css';

function App() {
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [isdata, setData] = useState({});
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError(false);
      axios.get("http://localhost:8080/ViewImage")
        .then(res => { // then print response status
            console.warn(res.data.listall);
            if(res.data.success === true){
              setData(res.data.listall);
              setLoading(true);
            }
        })
    } catch (error) { setError(true); }
    
  };

return (
    <div className="App">
      <div className="container">
        <div className="row">
          {isError && <div>Something went wrong ...</div>}
    
          {isLoading === false ? (
            <div>Loading ...</div>
          ) : ( <>
              <Lightbox viewImage={isdata} />
        </> )}

        <pre>{JSON.stringify(isdata, null, 2)} </pre>
        
        </div>
      </div>
    </div>
  );
}
export default App;