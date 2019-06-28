import React from 'react'
import style from './Dhead.scss'

class Dhead extends React.Component{
    render(){
        return(
            <div>
                <div className={style.head}>
                    商品介绍
                    <span></span>
                </div>
                <div style={{height:'40px',width:'100%'}}></div>
            </div>
            
        )
    }
}
export default Dhead