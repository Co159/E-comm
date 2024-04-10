import React from 'react';
import imagea from '../images/lap-5.jpg';

const Product = () => {
  return (
    <>
      <h2 className='text-center my-3'>Our Product Description</h2>
      <div className="row " >
        <div className="col-md-6 order-md-2">
          <p className='pt-3 ' style={{width:"100%"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi maiores magni placeat voluptatibus exercitationem voluptatum? Laborum corporis dolor nisi officiis at vitae dolore eum, repellendus dicta possimus non eveniet maxime nostrum nobis quam unde deleniti laudantium aut!. </p>
        </div>
        <div className="col-md-6 mt-2 order-md-1">
          <img className=' img-fluid'style={{width:"100%",height:"30vh"}} src={imagea} alt="" />
        </div>
      </div>
    </>
  );
};

export default Product;
