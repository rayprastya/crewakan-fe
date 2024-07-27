import React from 'react';

const OrderList = ({ foods }) => {
  return (
    <div className="mt-2">
        {foods.map((food, index) => (
          <div className="w-100 card p-2" key={index}>
            <h5>{food.name}</h5>
            <div className="d-flex">
              <img src={food.image} style={{height:'100px', width:'100px', borderRadius:'20px'}} alt={food.name} />
              <div className="ms-2 w-100">
                <div className="fw-bold">more chees please</div>
                <div className="d-flex w-100 justify-content-between">
                  <div className="text-secondary" style={{fontSize:'15px'}}>17 Minutes ago</div>
                  <div className="text-warning fw-bold align-self-center" style={{fontSize:'11px'}}>On Progress</div>
                </div>
                <div className="text-success">Rp. 20.000</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderList;
