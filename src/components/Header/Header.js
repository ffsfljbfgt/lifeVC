import React from 'react'
import style from './Header.scss'
import cs from 'classnames'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.$headRef = React.createRef()
        this.offsetTop = 0;
        this.state = {
            navTop: false
           }
      } 
       
    render(){
        console.log(style)
        let {header,fixed}=style
        return(
            <header className={cs({
                [`${header}`]:true,
                [`${fixed}`]:this.state.navTop
                })} ref={this.$headRef}>
                <span></span>
            </header>
        )
    }
      componentDidMount(){
    //    this.$headRef = this.refs.headRef;
       console.log(this.$headRef.current.offsetTop)
       if(this.$headRef){
           console.log(23423)
        this.offsetTop = this.$headRef.current.offsetTop;
        window.addEventListener('scroll',this.handleScroll.bind(this));
       }
       console.log(this.offsetTop)
       console.log(this)
      }
      
      handleScroll(){
       let sTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
       if(!this.state.navTop && sTop >= this.offsetTop){
         this.setState({
          navTop: true
         })
       }  
       if(sTop < this.offsetTop){
         this.setState({
          navTop:false
         })
       }
      }
}
export default Header