import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import {data, captionStyle, slideNumberStyle} from '../assets/carousel/carousel.js'


function Profile() {
   
  return (
    <>
          <Carousel
            data={data}
            time={5000}
            width="w-screen"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "flex",
            }}
          />
  </>
  )
}

export default Profile