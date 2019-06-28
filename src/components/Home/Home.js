import React from 'react'
import { WingBlank } from 'antd-mobile';
import style from './Home.scss'
import axios from 'axios'
import Banner from '../Banner/Banner'

class Home extends React.Component {
    state = {
        banner:[],
        imgHeight: "250px",
        new: [],
        homeList: []
    }
    renderNew() {
        const arr = this.state.new;
        return arr.map((item, index) => {
            return (
                <li key={index}>
                    <img src={item.url}></img>
                    <p>{item.name}</p>
                    <span>￥{item.price}</span>
                </li>
            )
        })
    }
    renderHome() {
        const arr = this.state.homeList
        return arr.map((item, index) => {
            return (
                <li key={index}>
                    <img src={item.url}></img>
                    <p>{item.name}</p>
                </li>
            )
        })
    }
    async componentDidMount(){
        const res = (await axios.get('http://localhost:19011/home')).data.data
        this.setState({
            banner:res.slice(0,7),
            new:res.slice(4,10),
            homeList:res.slice(10,30)
        })
    }
    render() {
        return (
            <WingBlank style={{margin:`10px 5px 0 5px`}}>
                <Banner banner={this.state.banner} height={this.state.imgHeight}></Banner>
                <p className={style.title}>超过2千万用户好评，值得信赖的全屋家具品牌</p>
                <div className={style.super}>
                    <img src='/img/super.jpg'></img>
                </div>
                <div className={style.new}>
                    <h3>NEW ARRIVAL</h3>
                    <ul>
                        {this.renderNew()}
                    </ul>
                </div>
                <div className={style.homeList}>
                    <ul>
                        {this.renderHome()}
                    </ul>
                </div>
            </WingBlank>
        )
    }
}
export default Home