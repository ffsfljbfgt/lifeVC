import React from 'react'
import style from './HomeCont.scss'
import axios from 'axios'
class HomeCont extends React.Component{
    state={
        produce:[],
        typeNum:0
    }
    renderList(){
        let arr = this.state.produce.filter((item)=>item.type==this.props.type);
        return arr.map((item,index)=>{
            return(
                <li key={index}>
                    <img src={item.url}></img>
                    <p>{item.name}</p>
                    <div>
                        <span>￥{item.price}</span>
                        <del>{item.oprice}</del>
                    </div>
                </li>
            )
        })
    }
    render(){
        return(
            <div className={style.proList}>
                <ul>
                    {this.renderList()} 
                </ul>
            </div>
        )
    }
    async componentDidMount(){
        if(sessionStorage.getItem('pro')){
             this.setState({
                produce: JSON.parse(sessionStorage.getItem('pro'))
            })
        }else{
            let res = (await axios.get('http://localhost:19011/home')).data.data;
            this.setState({
                produce: res
            })
            sessionStorage.setItem('pro',JSON.stringify(res));
        }
    }
}
export default HomeCont