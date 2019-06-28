import React from 'react'
import {List, Checkbox} from 'antd-mobile'
import style from './CartList.scss'
const CheckboxItem = Checkbox.CheckboxItem;
class CartList extends React.Component {
    render() {
        const data = [
            { value: 0, label: 'Ph.D.' },
            { value: 1, label: 'Bachelor' },
            { value: 2, label: 'College diploma' },
          ];
        return (
            <div className={style.list}>
                <div className={style.input}>
                    <List>  
                        <CheckboxItem>
                        </CheckboxItem>
                    </List>
                </div>
                <div className={style.img}>
                    <img/>
                </div>
                <div className={style.infor}>
                    <p>Max麦克斯舒适布艺软床</p>
                </div>
                <div className={style.price}> 
                    <p>￥4998</p>
                    <p>×2</p>
                </div>
            </div>
        )
    }
}
export default CartList