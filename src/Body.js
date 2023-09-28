import React from 'react';
import myImage from './img/comp.png';

const Body = ({ products, onProductSelect }) => {
  return (
    <div className='container'>

        <div className='wrapper'>
        
        <img id="main_wrapper" src={myImage}/>
        
        </div>
                   
       




  

        <div className='main_container'>
      <h2>Список товарів</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={product.isSelected}
              onChange={() => onProductSelect(index)}
            />
            {product.name}
          </li>
        ))}
      </ul>
    </div>

   






    </div>



  );
};

export default Body;