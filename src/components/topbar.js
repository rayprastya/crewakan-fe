import React from 'react';

const Topbar = ({ foods }) => {
  return (
        <div className="topbar bg-white text-primary shadow-sm" id="topbar">
            <div className="d-flex justify-content-between justify-content-md-start flex-md-row-reverse">
                <div className="d-flex flex-md-row-reverse">
                    <div className="dropdown mx-2">
                        <a className="btn btn-sm btn-outline-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="rounded-img">
                                <img src="https://wallpapercave.com/wp/wp8399452.png" alt="profile"/>
                            </div>
                        </a>
                        <ul className="dropdown-menu py-3">
                            <li><a className="dropdown-item h5 fw-light" href="#">Profile</a></li>
                            <li><a className="dropdown-item h5 fw-light" href="#">Upgrade</a></li>
                            <li><a className="dropdown-item h5 fw-light" href="#">Logout</a></li>
                        </ul>
                    </div>
                    <p className="p-4 h5 ">Ichasn Nur</p>
                </div>
                <div className="d-flex h4 text-primary me-4 gap-3">
                    <a href="#" className="btn btn-light align-self-center"> <i className="fa-regular fa-message"></i></a>
                    <a href="#" className=" align-self-center btn"><i className="fa-regular fa-bell"></i></a>
                </div>

                <div className="input-group align-self-center mb-4 px-4">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-utensils"></i></span>
                    <input type="text" className="form-control" placeholder="Mau cari apa" aria-label="Mau cari apa" aria-describedby="basic-addon1" />
                </div>
            </div>
        </div>
  );
};

export default Topbar;
