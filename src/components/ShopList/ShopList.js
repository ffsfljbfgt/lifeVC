import React from 'react'
import axios from 'axios'
import style from './ShopList.scss'

class ShopList extends React.Component {
    state = {
        produce: []
    }
    render() {
        return (
            <div>
                <ul className={style.list}>
                    {this.showList()}
                </ul>
            </div>
        )
    }
    showList() {
        return this.state.produce.map((item, index) => {
            return (
                <li key={index}>
                    <img src={item.url} />
                    <p>{item.name}</p>
                    <span>￥{item.price}</span>
                </li>
            )
        })
    }
    async componentDidMount() {
        if (sessionStorage.getItem('pro')) {
            this.setState({
                produce: JSON.parse(sessionStorage.getItem('pro'))
            })
        } else {
            let res = (await axios.get('http://localhost:19011/home')).data.data;
            this.setState({
                produce: res
            })
            sessionStorage.setItem('pro', JSON.stringify(res));
        }
    }
}
export default ShopList