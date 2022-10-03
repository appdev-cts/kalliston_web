import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import './article.css'

const ReadMore = ({ children }) => {
  
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = (e) => {
    e.preventDefault();
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 170) : text}<br />
       <a onClick={toggleReadMore} href="/" className="read-or-hide article__text-readmore">
        <BiChevronDown />
            {isReadMore ? " Read More" : " Show less"} 
        </a>
    </p>
  );
};

const Article = () => {
  return (
    <div className='article__text'>
        <div className="continer article__text-container">
            <h1 className="article__text-h1">
                Calisthenics taster
            </h1>

            <p className="article__text-p">
              <ReadMore >
                As you can see, I've carried your workouts as much as possible , except the last extra pull workout, which I've used your two previous pull work outs for to write and merge them together. You'll see I've also added a bit of core stuff; I think doing core with your pull is a great combination, and will also enchance your bar strength massively...
              </ReadMore>
            </p>
         
        </div>
    </div>
  )
}

export default Article