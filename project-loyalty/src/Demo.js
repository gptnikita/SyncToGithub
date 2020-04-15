import React from 'react'
import ReactDOM from 'react-dom'
import './Demo.css'
import 'tachyons'
import Demolist from './Demolist'
import Navbar from './Navbar'
const Demo =(props) =>{
    const demolistarray=[{
        id:1,
        name: 'Menu'
        
    },
    {
        id:2,
        name: 'Select Visit no.'
        
    }
]
        return (<div >
            
            <Navbar />
            <h1 className="tc">Welcome to Your_Resto</h1>
            <Demolist id="2" name={demolistarray[1].name}/> 
            <div className="tl-l pa4">
                <h2>
                    Menu
                </h2>
                <form>
                <label>
                <select>Menu:
                        <option>Food</option>
                        <option>Shahi Paneer</option>
                        <option>Dal Makhani</option>
                        <option>Chole Bhature</option>
                        <option>Dosa</option>
                        <option>Momos</option>
                        <option>Pizza</option>
                        <option>Aloo paratha</option>
                        <option>Chowmien</option>
                    </select>
                </label>
                    
        
                <h2>
                    Select visit
                </h2>
                
                    <div>
                        <label for="first">First Name:</label>
                        <input name="first" id="first" type="text"></input>
                        <label for="Last">Last Name:</label>
                        <input id="last" type="text"></input>
                        <label>Number of visit</label>
                        <input type="text"></input>
                    </div>
                    
                    <input type="submit"></input>
                </form>
            </div>
                       
        </div>
        )
    
}


export default Demo;