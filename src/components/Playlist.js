import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg'

const Playlist = (props) => {
    const dataPLaylist = [
        {
            id: 101,
            category_id: 1,
            name: 'Liked songs',
            img: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
            des: "Genre"
        },
        {
            id: 102,
            category_id: 2,
            name: 'Release Radar',
            img: "https://newjams-images.scdn.co/v3/release-radar/ab6761610000e5eb7f00589a87d7c63c12aefa69/en/default",
            des: "Catch all the latest music from the artists you follow..." 
        },
        {
            id: 103,
            category_id: 2,
            name: 'Discover Weekly',
            img: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/PYkpCDrE2LZy5P1MunPHDWaHVO28wW9mj6dcraAHkzfo8Lmc1EDmQwRcvcPKt24mOeXLqpOOvcMVk6MEam4iNJd92yz_gAV9i701iRMmTVA=/NzI6NTI6NDBUNTItMDEtMQ==",
            des: "Your weekly mixtape of fresh music. Enjoy new..."
        },
        {
            id: 104,
            category_id: 2,
            name: 'Daily Mix 1',
            img: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb247e32578e461f5ca18ba8df/1/en/default",
            des: "Mac Ayres, Leon Thomas, Jorja Smith and more"
        },
        {
            id: 105,
            category_id: 2,
            name: 'Daily Mix 5',
            img: "https://dailymix-images.scdn.co/v2/img/baa4a09ca62a85dab5de4a8e9d635571b9cfac9d/5/en/default",
            des: "Chet Baker, Wes Montgomery, Bill Evans, a..."
        },
        {
            id: 106, 
            category_id: 2,
            name: 'Daily Mix 6',
            img: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebefb0b1b3ef3dc2ef8656e91a/6/en/default",
            des: "Moonchild, Aaron Taylor, Jordan Rakei and more" 
        },
        {
            id: 107,
            category_id: 3,
            name: 'Your Time Capsule',   
            img: "https://daily-mix.scdn.co/covers/time-capsule/time-capsule-blue_DEFAULT-en.jpg", 
            des: "We make you a personalized playlist with..." 
        },
        {
            id: 108,
            category_id: 3,
            name: 'Repeat Rewind',  
            img: "https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind2_DEFAULT-en.jpg", 
            des: "Your past favourites" 
        },
        {
            id: 109,
            category_id: 3,
            name: 'Your Top Song 2020',
            img: "https://lineup-images.scdn.co/wrapped-2020-top100_DEFAULT-en.jpg", 
            des: "The songs you loved most this year, all wrapped up." 
        },
        {
            id: 110,
            category_id: 4,
            name: 'krnb',
            img: "https://i.scdn.co/image/ab67706c0000da84be23160a180129d15f3c9d69", 
            des: "By meem" 
        },
        {
            id: 111,
            category_id: 4,
            name: 'seagull choking...',
            img: "https://i.scdn.co/image/ab67706c0000da84ec60346f2c4f398266454d00", 
            des: "By meem" 
        },
        {
            id: 112,
            category_id: 4,
            name: 'r&v',
            img: "https://i.scdn.co/image/ab67706c0000da84092e8acda24e9d4677fbb5ee", 
            des: "By meem" 
        },
        {
            id: 113,
            category_id: 4,
            name: 'vegan steamed buns',
            img: "https://i.scdn.co/image/ab67706c0000da84a1c29e21adc1af27ab59d586", 
            des: "viet bops" 
        },
        {
            id: 114,
            category_id: 4,
            name: 'corduroy daydream',
            img: "https://i.scdn.co/image/ab67706c0000da84af82217348e97eaef19cd8aa", 
            des: "By meem" 
        },
        
    ]

    const matchedPlaylists = dataPLaylist.filter(playlist => playlist.category_id === props.category_id)
    return (
        <div className = "CardWrapInner">
            {matchedPlaylists.map(playlist => (
                <div className = "Card">
                    <div className = "CardImage">
                        <img src={playlist.img} alt="" ></img>
                    </div>
                    <div className = "CardContent">
                        <h3>{playlist.name}</h3>
                        <span>{playlist.des}</span>
                    </div>
                    <span className = "PlayIcon">
                        <PlayIcon />
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Playlist