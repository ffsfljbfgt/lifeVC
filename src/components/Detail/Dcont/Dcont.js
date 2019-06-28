import React from 'react'
import style from './Dcont.scss'
import { List, Stepper } from 'antd-mobile'

class Dcont extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          val: 3,
          val1: 2,
        };
      }
      onChange = (val) => {
        // console.log(val);
        this.setState({ val });
      }
      onChange1 = (val1) => {
        // console.log(val);
        this.setState({ val1 });
      }
    render() {
        return (
            <div  className={style.cont}>
                <div>
                    <p>8K波晴雨两用伞</p>
                    <p>防晒防雨890809</p>
                    <p>￥79</p>
                </div>
                <div>
                    <List>
                        <List.Item
                            wrap
                            extra={
                                <Stepper
                                    style={{ width: '100%', minWidth: '100px' }}
                                    showNumber
                                    max={10}
                                    min={1}
                                    value={this.state.val}
                                    onChange={this.onChange}
                                />}
                        >
                           商品数量：
                        </List.Item>
                    </List>
                </div>
            </div>
        )
    }
}
export default Dcont