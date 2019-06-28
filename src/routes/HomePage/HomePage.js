import React from 'react'
import Header from '../../components/Header/Header'
import TabBars from '../../components/TabBars/TabBars'
import Footer from '../../components/Footer/Footer'


class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <TabBars></TabBars>
                <Footer></Footer>
            </div>
        )
    }
}
export default HomePage