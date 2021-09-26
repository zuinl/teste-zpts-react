import React, { useState, useEffect } from "react";
import * as S from './styles'
import Image1 from '../../assets/img/loginSliderImg1.png'
import Image2 from '../../assets/img/loginSliderImg1.png'
import Image3 from '../../assets/img/loginSliderImg1.png'

const LoginSlider = () => {
    const images = [Image1, Image2, Image3]
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setImageIndex(imageIndex => imageIndex === images.length - 1 ? 0 : imageIndex + 1)
      }, 5000);

      return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <S.LoginSliderContainer>
            <S.SliderImage src={images[imageIndex]} alt="Imagem" />

            <S.SliderTextContainer>
                <h1>Marcenas mattis egestas</h1>

                <h2>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</h2>

                <S.SliderItemsContainer>
                    {images.map((_, index) => {
                        return (
                            <S.SliderItem key={index} 
                                active={imageIndex === index}
                                onClick={_ => setImageIndex(index)} />
                        )
                    })}
                </S.SliderItemsContainer>
            </S.SliderTextContainer>
        </S.LoginSliderContainer>
    )
}

export default LoginSlider