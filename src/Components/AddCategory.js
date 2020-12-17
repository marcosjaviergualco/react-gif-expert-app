import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setImputValue] = useState('');
     const handleImputChange = (e) =>{
        setImputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias(cat => [inputValue,...cat]);
            setImputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
          
          <input 
            type="text"
            value={inputValue}
            onChange={handleImputChange}
          />  
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
