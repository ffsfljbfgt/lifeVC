import React from 'react'
import ShopList from '../../components/ShopList/ShopList'
import Footer from '../../components/Footer/Footer'
import ShopHead from '../../components/ShopHead/ShopHead'

class ShopPage extends React.Component {
    render() {
        return (
            <div>
                <ShopHead/>
                <ShopList></ShopList>
                <Footer></Footer>
            </div>
        )
    }
}
export default ShopPage