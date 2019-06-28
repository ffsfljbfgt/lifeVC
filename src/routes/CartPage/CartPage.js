import React from 'react'
import CartHead from '../../components/Cart/CartHead/CartHead'
import CartList from '../../components/Cart/CartList/CartList'
import Footer from '../../components/Footer/Footer'
import Count from '../../components/Cart/Count/Count'

class CartPage extends React.Component{
    render(){
        return(
            <div>
                <CartHead/>
                <CartList></CartList>
                <Count></Count>
                <Footer></Footer>
            </div>
        )
    }
}
export default CartPage