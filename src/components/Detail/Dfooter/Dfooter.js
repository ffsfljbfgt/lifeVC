import React from 'react'
import styles from './Dfooter.scss'
class DFooter extends React.Component{
    render(){
        return(
            <div className='fot'>
                <footer>
                   <div className={styles.common}>
                       <img src="/img/kefu.png"/><br/>
                       <span>客服</span>
                   </div>
                   <div className={styles.common}>
                       <img src="/img/cart1.png"/><br/>
                       <span>购物车</span>
                   </div>
                   <div className={styles.buy}>立即购买</div>
                   <div className={styles.cart}>加入购物车</div>
               </footer>
            </div>
        )
    }
}
export default DFooter