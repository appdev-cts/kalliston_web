import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { exercises } from '../../data'
import './secondpage.css'

const SecondPage = () => {
  return (
    <div className='sp'>
      <div className="container sp__container">
        <div className="sp__heading">
          <div className="sp__heading-h1">
            <h1 className="sp__heading-h1">
               Calisthenics taster
            </h1>
          </div>
          <div className="sp__week">
            <h2 className="sp__week-h3">
              Week 1: Pull
            </h2>
          </div>
          <div className="sp__equipment-heading">
            <h2 className="sp__equipment-heading__h1">
              Equipment
            </h2>
            <p className="sp__equipment-heading__p">
              Pull Up bar
            </p>
          </div>
        </div>

        <div className="sp__exercise-heading">
          <h2 className="sp__exerices-heading__h1">
            Exercises
          </h2>
        </div>

        <div className="sp__exercises-ul">
          <div className="sp__exercises-list-div">
            <ul className="sp__exercises-list">
              {
                  exercises.map(({text}, index) => {
                    return (
                      <li className='sp__exercises-list__li'>
                        <span className='sp__exercises-list__span'></span>
                          <a className='sp__exercise-list__a' href='#'>
                            {text}
                          </a>
                          <p className="sp__exercises-list__p">
                            If you can only do 2 sets before not being able to perform a rep then move on to the next exercise.
                          </p>
                          <span className="sp__exercises-list-btn">
                            <div className="sp__exercises-list__number">
                              <div className="sp__exercises-list__span-number">1</div>
                              <div className="sp__exercises-list__span-number">1</div>
                              <div className="sp__exercises-list__span-number">1</div>
                            </div>
                            <BiDotsHorizontalRounded onClick={ () => {}} className='icon' />
                          </span>
                      </li>
                    )
                  })
              }
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SecondPage
