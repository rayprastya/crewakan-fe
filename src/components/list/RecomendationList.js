import React from 'react';

const RecomendationList = ({ foods }) => {
  return (
    <div className="container my-3">
      <div className="d-flex gap-1 scrollx">
        {foods.map((food, index) => (
            <div className="card" key={index}>
                <img src={food.image} className='w-100' alt="" />
                <span className="fw-bold" style={{position:'absolute', left:'10px', bottom:'10px'}}>
                    {food.name} <br className='my-1'/>
                    <span className="text-white bg-warning px-2 py-1" style={{fontSize:'10px'}}>Sulit</span>
                </span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default RecomendationList;
