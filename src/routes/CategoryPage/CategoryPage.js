import React from 'react'
import CateHead from '../../components/Category/CateHead/CateHead'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Category/Search/Search'
import CateCont from '../../components/Category/CateCont/CateCont'


class CategoryPage extends React.Component{
    state={
        cat:[
            {
                type:'house',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/49313ef697d0489d96ceb55dc11b9356.jpg',
                title:'床和席梦思'
            },
            {
                type:'house',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/a11c1476439c44ccb57ef10c89a67c45.jpg',
                title:'沙发'
            },
            {
                type:'kitchen',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/26e427ea574546098ffb3598e9945a6a.jpg',
                title:'厨房小帮手'
            },
            {
                type:'kitchen',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/0f2da2166d074cc0bd3c2599e19451d7.jpg',
                title:'餐具'
            },
            {
                type:'kitchen',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/a7cbfb13620d4cbb85b71643ecbdc2eb.jpg',
                title:'厨房电器'
            },
            {
                type:'kitchen',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/a4a414cbf6c54eb18f14f4463181d7ae.jpg',
                title:'锅具'
            },
            {
                type:'kitchen',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/6d057839c1954299b9a367288ce15672.jpg',
                title:'水杯水壶'
            },
            {
                type:'kitchen',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/9693b93bdef4435fb63d730ab4614168.jpg',
                title:'餐厨美食'
            },
            {
                type:'bed',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/3d53158fd5e147f89abe1f875023cff1.jpg',
                title:'夏被盖毯'
            },
            {
                type:'bed',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/c6887183667542f6bd093685fde58a9e.jpg',
                title:'凉席'
            },
            {
                type:'bed',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/2d55d771c8284302929b5ea3796f78bf.jpg',
                title:'拆件随心配'
            },
            {
                type:'bed',
                url:'http://i.lifevccdn.com/upload/AppIndexIcon/9e8fb846b1304d4f88870159d95af8d6.jpg',
                title:'安睡枕'
            }
        ]
    }
    render(){
        return(
            <div>
                <CateHead></CateHead>
                <Search></Search>
                <CateCont category={this.state.cat.filter(item=>item.type=="house")} title={'全屋家具'}></CateCont>
                <CateCont category={this.state.cat.filter(item=>item.type=="kitchen")} title={'下厨'}></CateCont>
                <CateCont category={this.state.cat.filter(item=>item.type=="bed")} title={'床品'}></CateCont>
                <Footer></Footer>
            </div>
        )
    }
}
export default CategoryPage