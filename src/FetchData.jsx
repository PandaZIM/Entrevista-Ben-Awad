import React, { useEffect, useState } from 'react';
import axios from 'axios'

// primeiramenta gostaria de dizer que estarei usando axios para pegar
// os dados ao invés de fetch()
// http://randomuser.me/api

function FetchData() {


    const [jsonUsuarioData, setJsonUsuarioData] = useState([])


    useEffect(() => {
         axios.get('https://randomuser.me/api')
        .then(response => {
            const usuarioData = response.data
            setJsonUsuarioData(usuarioData)
        })
        .catch(error => {
            // handle error
            console.log(error);
        })
    }, []);

    

    return (
        <div>
            <ul>
                
                {jsonUsuarioData.results?.map((jsonUsuarioDatas, index) => {
                    return <div key={index}>
                                {jsonUsuarioDatas.name.title}
                                {jsonUsuarioDatas.name.first}
                                {jsonUsuarioDatas.name.last}
                                <br></br>
                                <img src={jsonUsuarioDatas.picture.large}/>
                            </div>
                })}
            </ul>
        </div>
    );
}

export default FetchData;