import React from 'react'
import style from './Uhead.scss'

class Uhead extends React.Component{
    render(){
        return(
            <div>
                <div className={style.head}>
                    账户中心
                    <span></span>
                </div>
                <div style={{height:'40px',width:'100%'}}></div>
            </div>
            
        )
    }
}
export default Uhead