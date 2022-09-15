import React from 'react';
import {useState} from 'react'


export default function StatePage({state}) {
  const [data, setData] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  React.useEffect(() => {
    let url = `https://developer.nps.gov/api/v1/parks?StateCode=` + {state} + `&limit=469&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);


     function handleSearch(e) {
            e.preventDefault();
            setSearchTerm({state})
            }

    if (data.length > 0) {
    data.filter((i)  => {
        return i.fullName.match(data);
    });
    }


    function filterParkNames(park) {
        if (searchTerm === ""){
            return park
        } if (park.fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return park
       }
    }

return (

     <div>

           {data.filter((park)=> {
             return filterParkNames(park)
           })
           .map((park, key) => {
             return (
                 <div key={key}>
                 <h2>{park.fullName}</h2>
                 <br />
                 {park.states}
                 <br />
                 {park.description}
               </div>
             )
             })
             }

          </div>
       );
     };
