import './card.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slice.jsx';

function Mycard(props){
    

    const dispatch=useDispatch();
    let [prev , setPrev]=useState(true)
    

  
      let  clickHandler = () => {
        props={...props,totalprice:props.price,count:1}
        if(prev){
            dispatch(addToCart(props))
            setPrev(false)

      }
    }
       
    

    return(
        <div className="cardcontainer">
            <img src={props.image}/>
            <div className="cardbody">
                <p className="fs-5">{props.name}</p>
                <p className="price">Price:{props.price.toLocaleString()}</p>
            </div>
            <button onClick={clickHandler} className="btn btn-primary">Add to cart</button>
        </div>

    )
}
export default Mycard