
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { delFromCart , increaseToCart , decreaseToCart } from "../../slice";




function Productincart(props){

    

    const dispatch=useDispatch()
    

    let clickAddhandler = () =>{
        
         dispatch(increaseToCart(props.id))
           
    }


    let clickdelethandler = () =>{

        dispatch(delFromCart(props))
    }

    
    let clickDechandler = () =>{
        
        dispatch(decreaseToCart(props.id))
       
    }



    return(
        <div className="cart-main-items">
        <div className="cart-main-items-img">
            <img src={props.image} className="img-fluid" />
        </div>
        <div className="cart-main-items-btn">
            {props.count > 1 ? (<button onClick={clickDechandler}>-</button>) : 
            (<button onClick={clickdelethandler}><RiDeleteBin6Line /></button>)}
            
            <span>{props.count}</span>
            <button onClick={clickAddhandler}>+</button>
        </div>
        <div className="cart-main-items-item">
            <p>{props.name}</p>
            <p>price:{props.totalprice.toLocaleString()}</p>
        </div>
    </div>

    )
}
export default Productincart