import React from 'react'
import './weekcard.css'
import Cards from '../../components/Cards/Cards'

const WeekCard = () => {
  return (
    <section className="weekcard">
        <div className="container weekcard__container">
            <div className="weekcard__head">
                <Cards number="1" />
                <Cards number="2" />
                <Cards number="3" />
                <Cards  number="4"/>
            </div>
        </div>
    </section>
  )
}

export default WeekCard