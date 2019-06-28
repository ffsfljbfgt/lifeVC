import React from 'react'
import style from './Count.scss'
import {List, Checkbox,Button} from 'antd-mobile'
const CheckboxItem = Checkbox.CheckboxItem;
class Count extends React.Component {
    render() {
        return (
            <div className={style.list}>
                <div className={style.input}>
                    <List>
                        <CheckboxItem>
                        </CheckboxItem>
                    </List>
                </div>
                <div className={style.price}>
                    <p>合计：<span>￥10025</span></p>
                    <p>商品 <i>￥10025</i>-优惠<span>￥0</span></p>
                </div>
                <div className={style.btn}>
                    <Button size="large" className={style.count}>结算(2)</Button>
                </div>
            </div>
        )
    }
}
export default Count