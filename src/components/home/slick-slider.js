import React from "react";
import { Link } from "gatsby";
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 2000,
    fade:true,
    autoplaySpeed:5000,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };
  const slide=['slide-one','slide-two','slide-three']
const SlickSlider = (props) => (
    <Slider {...settings}   >
        {
                props.service.map((item,index) => {
                    if(item.slideTitle) {
                        return (
                        <div className={`slider ${slide[index]}`}>
                        <div className="sliderMax">
                            <h1 className="white">{item.slideTitle}</h1>
                            <h3 className="mb-4 white">{item.tagline}</h3>
                            <p className="white mb-5"
                                    dangerouslySetInnerHTML={{
                                __html: item.shortBio.childMarkdownRemark.excerpt,
                                    }}
                                />
                            <Link to={`/${item.slug}`}> <button className="btn">Read More</button> </Link> 
                        </div>
                    </div>
                    )
                    }
                })
            }  
    </Slider>
)

export default SlickSlider;
