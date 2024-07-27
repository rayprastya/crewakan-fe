import React from 'react';

const Sidebar = ({ foods }) => {
  return (<>
  
  <div className="sidebar h6 shadow-sm bg-primary-subtle" id="sidebar">
        <a href="#" className="d-none d-md-block  bg-primary-subtle mb-4"><img src="https://angelhack.com/wp-content/uploads/hackjakarta_logo_white.png" alt="logo" width={"100%"} /></a>
        <a href="#"><i className="fas fa-home"></i><span className="ms-3 d-none d-sm-block">Home</span></a>
        <a href="#"><i className="fas fa-check"></i><span className="ms-3 d-none d-sm-block">Order</span></a>
        <a href="#"><i className="fa-solid fa-money-bill-transfer"></i><span className="ms-3 d-none d-sm-block">Transaksi</span></a>
    </div>
  </>
  );
};

export default Sidebar;
