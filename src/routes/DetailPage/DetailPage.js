import React from 'react'
import Banner from '../../components/Banner/Banner'
import Dcont from '../../components/Detail/Dcont/Dcont'
import Dfooter from '../../components/Detail/Dfooter/Dfooter'
import Dhead from '../../components/Detail/Dhead/Dhead'

class DetailPage extends React.Component{
    render(){
        return(
            <div>
                <Dhead/>
                <Banner banner={['1','2','3']} height={'375px'}></Banner>
                <Dcont></Dcont>
                <Dfooter/>
            </div>
        )
    }
}
export default DetailPage