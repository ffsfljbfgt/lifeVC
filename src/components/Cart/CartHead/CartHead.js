import React from 'react'
import style from './CartHead.scss'

class CartHead extends React.Component{
    render(){
        return(
            <div>
                <div className={style.head}>
                    购物车
                    <span></span>
                </div>
                <div style={{height:'40px',width:'100%'}}></div>
            </div>
        ) 
    }
}
export default CartHead