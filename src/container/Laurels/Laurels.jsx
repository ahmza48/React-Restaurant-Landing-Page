import React from 'react';
import {images,data} from '../../constants';
import { SubHeading} from '../../components';
import './Laurels.css';

const AwardCard = (props) => {
  
  return(
    <div className='app__laurels_awards-card'>
      <img src={props.award.imgUrl} alt="award" />
      <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style={{color:'#DCCA87'}}>{props.award.title}</p>
        <p className='p__cormorant'>{props.award.subtitle}</p>
      </div>

    </div>
  )
}


const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title='Awards & Recognotion'/>
      <h1 className='headtext__cormorant'>Our Luarals</h1>

      <div className='app__laurels_awards'>
        <p>
          {data.awards.map((award)=><AwardCard award={award} key={award.title}/>)}
        </p>

      </div>

    </div>

    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="laurels" />

    </div>

  </div>
);

export default Laurels;
