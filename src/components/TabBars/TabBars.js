import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import style from './TabBars.scss'
import Home from '../Home/Home'
import HomeCont from '../HomeCont/HomeCont'
import cs from 'classnames'

class TabBars extends React.Component {
  constructor(props){
    super(props)
    this.tabRef=React.createRef();
    this.offsetTop = 48;
    this.state={
      tabTop:false
    }
  }
  renderContent = tab =>
    (<div style={{height:'100%'}}>
      {tab.title==='首页'?<Home></Home>:<HomeCont type={tab.title}></HomeCont>}
    </div>);
  render() {
    let {fixed} = style
    const tabs = [
      { title: '首页',key:0 },
      { title: '新品',key:1 },
      { title: '全屋家具',key:2 },
      { title: '下厨',key:3 },
      { title: '床品',key:4 },
      { title: '家务',key:5 },
      { title: '生活日用',key:6 },
      { title: '洗沐',key: 7},
      { title: '家居服',key: 8},
    ];
    return (
      <div style={{paddingTop:'48px'}}>
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}  
        initialPage={0}
        tabBarActiveTextColor='#89be48'
        ref={this.tabRef}     
        >
          {this.renderContent}
        </Tabs>
      </div>
    );
  }
  // componentDidMount(){
  //   window.addEventListener('scroll',this.handleScroll.bind(this))
  // }
  // handleScroll(){
  //   let scr = document.documentElement.offsetTop || window.offsetYOffset || document.body.offsetTop
  //   if(!this.state.tabTop&&scr>=this.offsetTop){
  //     this.setState({
  //         tabTop:true
  //     })
  //   }else{
  //     this.setState({
  //       tabTop:false
  //     })
  //   }
  // }
  
}

export default TabBars