import React from 'react'
import style from './Ucont.scss'

class Ucont extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {!0?this.renderUser():this.renderLogOrReg()}
                </div>
                <div className={style.service}>
                    <ul>
                        {this.renderService()}
                    </ul>
                </div>
                <div className={style.other}>
                    <ul>
                        {this.renderOther()}
                    </ul>
                </div>
            </div>
        )
    }
    renderUser() {
        return (
            <div className={style.user}>
                <img src='http://i1.lifevccdn.com/images/m/Account/mugshot_default@2x.png'></img>
                <div>
                    <p>13420111353</p>
                    <p>新新会员 >></p>
                </div>
            </div>
        )
    }
    renderLogOrReg(){
        return(
            <div className={style.log}>
               <div>您还没登录</div> 
               <div>
                   <span>登录</span>
                   <span>注册</span>
                </div>
            </div>
        )
    }
    renderOther() {
        const arr = [
            {
                title: '我的订单',
                url: '/img/order.png'
            },
            {
                title: '我的优惠券',
                url: '/img/youhui.png'
            },
            {
                title: '现金积分',
                url: '/img/money.png'
            },
            {
                title: '关于发票',
                url: '/img/money.png'
            },
            {
                title: '密码和登录信息',
                url: '/img/code.png'
            },
            {
                title: '老会员建议',
                url: '/img/advice.png'
            },
            {
                title: '客户服务',
                url: '/img/kehu.png'
            },
            {
                title: '地址管理',
                url: '/img/address.png'
            },
            {
                title: '手机验证',
                url: '/img/mobile.png'
            }
        ]
        return arr.map((item, index) => {
            return (
                <li>
                    <img src={item.url} />
                    <span>{item.title}</span>
                </li>
            )
        })
    }
    renderService() {
        const arr = [
            {
                url: '/img/pay.png',
                title: '待支付'
            },
            {
                url: '/img/deliver.png',
                title: '待发货'
            },
            {
                url: '/img/car.png',
                title: '待收货'
            },
            {
                url: '/img/comment.png',
                title: '待评价'
            },
            {
                url: '/img/msg.png',
                title: '回复'
            },
            {
                url: '/img/reject.png',
                title: '退换货'
            },
        ]
        return arr.map((item, index) => {
            return (
                <li key={index}>
                    <i style={{
                        background: `url(${item.url}) no-repeat center center`,
                        backgroundSize: '70%'
                    }}></i>
                    <span>{item.title}</span>
                </li>
            )
        })
    }
}
export default Ucont