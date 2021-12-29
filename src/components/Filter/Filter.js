import React,{useState} from 'react'
import Api from '../Api/Api'

export default function Filter() {
const{char} = Api();
const[filter,setFilter]=useState('');

const searchText=(e)=>{
    setFilter(e.target.value);
    console.log(e.target.value)
}

    let dataSearch = char.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });

    return (
        <div>
            <input type="text" className="form-control" value={filter} onChange={searchText} placeholder="Search Breaking Bad Char.."  />
        </div>
    )
}
