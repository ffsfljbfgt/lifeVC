import React from 'react'
import style from './ShopHead.scss'

class ShopHead extends React.Component{
    render(){
        return(
            <div>
                <div className={style.head}>
                    闲逛
                    <span></span>
                </div>
                <div style={{height:'40px',width:'100%'}}></div>
            </div>
            
        )
    }
}
export default ShopHead