import { BiChevronRight } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
import { weekcards } from '../../data'
import SecondPage from '../../pages/secondpage/SecondPage'
import './cards.css'



const _weekcardHead = (number) => {
return (
        <>
        <h2 className="weekcard__head-text">
            Week {number}
        </h2>
        </>
    
)

}
const Cards = ({icon, name,number, className ,id}) => {
  return (
    <div className='cards'>
        <h2 className="weekcard__head-text">
            Week {number}
        </h2>
        <div className="weekcard__div">
            <ul className="weekcard__ul">
                {
                    weekcards.map(({name, path,icon}, index) => {
                        return (
                          
                            <li className='weekcard__li'>
                                <NavLink  className="weekcard__li-a" to={path}>{name}<BiChevronRight /></NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Cards