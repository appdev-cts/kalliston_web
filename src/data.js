import { upload } from '@testing-library/user-event/dist/upload'
import { BiChevronRight } from 'react-icons/bi'

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About Us",
        path: '/about'
    },
    {
        name: "Our Coaches",
        path: '/coaches'
    },
    {
        name: "Contact Us",
        path: '/contact'
    }
]

export const weeknumber = [
    {
        id:1,
        name:"week",
        number: "1"
    },
    {
        id:2,
        name:"week",
        number: "2"
    },
    {
        id:3,
        name:"week",
        number: "3"
    },
    {
        id:4,
        name:"week",
        number: "4"
    }
]

export const weekcards = [
    {
        id: 1,
        icon: <BiChevronRight />,
        name: "Pull",
        path: "/secondpage"
    },
    {
        id: 2,
       icon: <BiChevronRight />,
        name: "Push",
        path: "/secondpage"
    },
    {
        id: 3,
        icon: <BiChevronRight />,
        name: "Pull",
        path: "/secondpage"
    },
    {
        id: 4,
        icon: <BiChevronRight />,
        name: "Push",
       path: "/secondpage"
    },
    {
        id: 5,
        icon: <BiChevronRight />,
        name: "Pull",
       path: "/secondpage"
    },
    {
        id: 6,
        icon: <BiChevronRight />,
        name: "Rest",
       path: "/secondpage"
    },
    {
        id: 7,
        icon: <BiChevronRight />,
        name: "Pull",
       path: "/secondpage"
    }
]

export const exercises = [
    {
        id:1,
        text:"Full Warm upload",
    },
    {
        id:2,
        text:"Max Pull Ups",
    },
    {
        id:3,
        text:"Negative Pull Ups",
    },
    {
        id:4,
        text:"Isolation Hold Pull Ups",
    },
    {
        id:5,
        text:"Resistance Band Chin Ups",
    },
    {
        id:6,
        text:"Australian Row",
    }
]
