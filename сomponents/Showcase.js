import Image from 'next/image'
import Tovar from "../assets/img/tovar.jpg"
import "../assets/scss/showcase.scss"


export default function MySwiper(title, comment) {
    console.log(title);
    return (
        <div className='container'>
        <div className= 'product'>
                <div className = "-top">
                    <div className='-title'>
                    {title.text}

                    </div>
                    <div className='-comment'>
                    {comment.text}

                    </div>

                </div>

                <div className='-bottom'>
                    <Image src={Tovar} className='-img' />
                    <Image src={Tovar} className='-img' />
                    <Image src={Tovar} className='-img' />

                </div>
            </div>
        </div>
);
};