import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

class Banner extends React.Component{
    render(){
        
        return(
            <Carousel
                    autoplay={false}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                >
                    {this.props.banner.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: `${this.props.height}`}}
                        >
                            <img
                                src={val.url}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', height: '100%' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
            </Carousel>
        )
    }
}
export default Banner