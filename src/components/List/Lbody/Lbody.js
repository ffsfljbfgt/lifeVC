import React from 'react'
import style from './Lbody.css'
import axios from 'axios'
import navstyle from'./Lnav.scss'


class Lbody extends  React.Component{
    state={
        list:[],
        isok:true,
        price:"降序"
    }
    // 原始渲染
    async componentWillMount(){
        const news =  JSON.parse((await axios.get("http://localhost:5000/list/list")).request.response)
        this.setState({
            list:news
        })
        console.log(this)
    }
    // 新鲜度排序
    async newstate(){
        const news =  JSON.parse((await axios.get("http://localhost:5000/list/list")).request.response)
        this.setState({
            list:news
        })

    }
    async saletate(){
        const news =  JSON.parse((await axios.get("http://localhost:5000/listprice2/listprice2")).request.response)
        this.setState({
            list:news
        })

    }
    // 价格排序
    async pricestate(){
        if(this.state.isok){
            const akg =  JSON.parse((await axios.get("http://localhost:5000/listprice/listprice")).request.response)
            this.setState({
            list:akg,
            isok:false,
            price:"升序"
        }) 
        }else{
            const akg1 =  JSON.parse((await axios.get("http://localhost:5000/listprice1/listprice1")).request.response)
            this.setState({
            list:akg1,
            isok:true,
            price:"降序"
        }) 
        }
        


        
    }
    render(){
        return(
            <div>
            <div data-v-2221d056="" className={navstyle.wrapshelfnavs}>
                <ul data-v-2221d056="" className={navstyle.lifesort}>
                    <li data-v-2221d056=""><a data-v-2221d056="" className="" onClick={this.saletate.bind(this)}>新品</a></li> 
                    <li data-v-2221d056=""><a data-v-2221d056="" className="" onClick={this.newstate.bind(this)}>畅销</a></li> 
                    <li data-v-2221d056=""><a data-v-2221d056="" className=""><span data-v-2221d056="" onClick={this.pricestate.bind(this)}>价格{this.state.price}</span> <i data-v-2221d056="" className=""></i></a></li>
                </ul>
            </div>
            <article data-v-2221d056="" className={style.mainbodyshelf}>
               {
                this.state.list.map((item,index)=>{
                    return(
                        <div data-v-2221d056="" className="wrap-shelf toolsOnly" index={item.id}>
                        <div data-v-cbe28f50="" data-v-2221d056="" className={style.shelfitem} style={{position:'relative'}}>
                        <a data-v-cbe28f50="" className={style.itempicbx}>
                        <img data-v-cbe28f50="" className={style.itempic} src={item.url} lazy="loaded" />
                        <div data-v-cbe28f50="" className={style.itemstatusempty} style={{display: "none"}}>
                        热卖脱销
                        </div>
                        </a> 
                        <div data-v-cbe28f50="" className={style.itempanel}>
                        <div data-v-cbe28f50="" className={style.title}>
                        {item.name}
                        </div> <div data-v-cbe28f50="" className={style.itemprice}>
                        <div data-v-cbe28f50="" className={style.pricecont}>
                        <span data-v-cbe28f50="" className={style.acttag} style={{display:"none"}}></span>
                        <span data-v-cbe28f50="">￥</span>
                        <span data-v-cbe28f50="">{item.price}</span>&nbsp;
                        <span data-v-cbe28f50="" className={style.originalprice}></span>
                        <span data-v-cbe28f50="" className={style.promolable}>新</span></div>
                        <div data-v-cbe28f50="" className={style.itemcomment}>评论：13</div></div></div>
                        <div data-v-cbe28f50=""></div></div>        
                        </div>
                     )
                })  
               }
            </article>
            </div>
        )
    }
}

export default Lbody