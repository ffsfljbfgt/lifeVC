import React from 'react'
import style from './CateCont.scss'

class CateCont extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={style.cate}>
                <h4>{this.props.title}</h4>
                <ul>
                    {this.renderCate()}
                </ul>
            </div>
        )
    }
    renderCate(){
        const arr = this.props.category
        return arr.map((item,index)=>{
            return(
                <li key={index}>
                    <img src={item.url} />
                    <p>床和席梦思</p>
                </li>
            )
        })
    }
    componentDidMount(){
        console.log(this)
    }
}
export default CateCont