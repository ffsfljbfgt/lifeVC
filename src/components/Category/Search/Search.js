import React from 'react'
import { SearchBar} from 'antd-mobile';

class Search extends React.Component{
    render(){
        return(
            <div>
                <SearchBar
                    placeholder="搜索"
                    ref={ref => this.manualFocusInst = ref}
                />
            </div>
        )
    }
}
export default Search