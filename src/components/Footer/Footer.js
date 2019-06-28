import React from 'react'
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '首页'
    }
  }
  renderFooter() {
    const tabs=[
      {
        name:'首页',
        url:'/img/home.png',
        activeUrl:'/img/home1.png',
        path:'/home'
      },
      {
        name:'全部',
        url:'/img/catgory.png',
        activeUrl:'/img/catgory1.png',
        path:'/category'
      },
      {
        name:'闲逛',
        url:'/img/shopping.png',
        activeUrl:'/img/shopping1.png',
        path:'/shop'
      },
      {
        name:'购物车',
        url:'/img/cart.png',
        activeUrl:'/img/cart1.png',
        path:'/cart'
      },
      {
        name:'个人',
        url:'/img/user.png',
        activeUrl:'/img/user1.png',
        path:'/user'
      }
    ]
    return tabs.map((item, index) => {
      return (
        <TabBar.Item
          title={item.name}
          key={index}
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${item.url}) center center /  21px 21px no-repeat`
          }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${item.activeUrl}) center center /  21px 21px no-repeat`
          }}
          />
          }
          selected={this.state.selectedTab ===`${item.name}`}
          // badge={1}
          onPress={() => {
            this.props.history.push(`${item.path}`)
            this.setState({
              selectedTab: `${item.name}`,
            });
          }}
          data-seed="logId"
        >
        </TabBar.Item>
      )
    })
  }
  render() {
    return (
      <div style={{ position: 'fixed', bottom: 0, width: '100%', marginTop: '60px' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#89be48"
          barTintColor="white"
          tabBarPosition="bottom"
        >
          {this.renderFooter()}
        </TabBar>
      </div>
    );
  }
  componentDidMount(){
    console.log(this)
  }
}
export default withRouter(Footer)