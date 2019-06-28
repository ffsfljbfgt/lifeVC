import React from 'react'
import Uhead from '../../components/User/Uhead/Uhead'
import Footer from '../../components/Footer/Footer'
import Ucont from '../../components/User/Ucont/Ucont'

class UserPage extends React.Component{
    render(){
        return(
            <div>
                <Uhead></Uhead>
                <Ucont></Ucont>
                <Footer></Footer>
            </div>
        )
    }
}
export default UserPage