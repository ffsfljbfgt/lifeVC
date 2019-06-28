import React from 'react'
import style from './CateHead.scss'

class CateHead extends React.Component{
    render(){
        return(
            <div>
                <div className={style.head}>
                    全部产品
                    <span></span>
                </div>
                <div style={{height:'40px',width:'100%'}}></div>
            </div>
            
        )
    }
}
export default CateHead