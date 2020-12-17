import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = props => {
    
    const[categorias, setCategorias] = useState([]);

    return (
        <>
            <h2>GifExpertApp</h2>  
            <AddCategory setCategorias={setCategorias}/> 
            <hr /> 

            <ol>
                {
                    categorias.map(categoria => <GifGrid key={ categoria } category={ categoria }/>)
                }
            </ol>  
        </>
    )
}

export default GifExpertApp
