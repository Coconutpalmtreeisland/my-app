import { IoHome } from 'react-icons/io5'
import { BiFoodMenu } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'

import { AiFillGithub } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

export const menuText = [
    {
        title: "요리 유튜버 홈",
        icon: <IoHome />,
        src: '/'
    },{
        title: "오늘의 요리 추천",
        icon: <BiFoodMenu />,
        src: '/Today'
    },{
        title: "유명 요리 유튜버 소개",
        icon: <BsStars />,
        src: '/Youtuber'
    }
]

export const keywordText = [
    {
        title: "백종원",
        src: "/search/백종원"
    },{
        title: "끼룩푸드",
        src: "/search/끼룩푸드"
    },{
        title: "김대석 셰프TV",
        src: "/search/김대석 셰프TV"
    },{
        title: "함께해요 맛나요리",
        src: "/search/함께해요 맛나요리"
    },{
        title: "요리왕비룡",
        src: "/search/요리왕비룡"
    },{
        title: "요리용디",
        src: "/search/요리용디"
    },{
        title: "수빙수tv",
        src: "/search/수빙수tv"
    },{
        title: "고기남자",
        src: "/search/고기남자"
    },{
        title: "1분요리 뚝딱이형",
        src: "/search/1분요리 뚝딱이형"
    },{
        title: "먹어볼래",
        src: "/search/먹어볼래"
    },{
        title: "매일맛나",
        src: "/search/매일맛나"
    },{
        title: "쿠킹트리",
        src: "/search/쿠킹트리"
    },{
        title: "하루한끼",
        src: "/search/하루한끼"
    },{
        title: "쿠킹하루",
        src: "/search/쿠킹하루"
    },{
        title: "식탁일기",
        src: "/search/식탁일기"
    },{
        title: "이 남자의 cook",
        src: "/search/이 남자의 cook"
    }
]

export const snsText = [
    {
        title: "Github",
        src: "https://github.com/Coconutpalmtreeisland",
        icon: <AiFillGithub />
    },{
        title: "Youtube",
        src: "https://www.youtube.com/@dear_stranger",
        icon: <AiFillYoutube />
    },{
        title: "Instagram",
        src: "",
        icon: <BsInstagram />
    }
]