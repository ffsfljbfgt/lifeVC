import React from 'react'
import Lhead from '../../components/List/Lhead/Lhead'
import Lbody from '../../components/List/Lbody/Lbody'
class List extends React.Component{
    render(){
        return(
            <div>
               <Lhead/>
               <Lbody/>
            </div>
        )
    }
}
export default List