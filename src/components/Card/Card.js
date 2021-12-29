import React, { useState } from 'react';
import Api from '../Api/Api';
import './Card.css';
import Spinner from '../Spinner/Spinner';

export default function Card() {
 
    const { char, loader } = Api();
    const [filter, setFilter] = useState('');

    const searchText = (e) => { 
        setFilter(e.target.value)
    }

    let dataSearch = char.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
        
    });


    return (
<div className='container'>
            <div className="row">
                <div className="search">
                    <input type="text" className="form-control" value={filter} onChange={searchText} placeholder="Search Characters..."/>
                    {/* <BiSearchAlt className='search-icon'/>  */}
                </div>
                <br />
                <br />
                <br />
        
                {loader ? (<Spinner/>) : dataSearch.map(item => {
                    return (
                        <div className="col-lg-4" key={item.char_id}>
                                <img src={item.img} alt={item.name} style={{ width: "350px", height: "450px" }} />
                                <div className="card-body">
                                    <h4 className="card-title text-white">{item.name}</h4>
                                <h5 className="card-title text-white">({item.nickname})</h5>
                                <p className="card-text text-white">Status: {item.status}</p>
                                <p className="card-text text-white">Occupation : <strong>{item.occupation[0]}</strong></p>
                                <p className="card-text"><small className="text-muted">Born : {item.birthday}</small></p>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
