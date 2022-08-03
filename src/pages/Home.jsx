import john from '../assets/john.jpg'
import lin from '../assets/lin.jpg'
import kevin from '../assets/kevin.jpg'
import dom from '../assets/dom.jpg'
import '../stylingpage/Home.css'

function Home () {
    return (
        <div className='group'>
            <div className='box'>
                <img className='pic' src = {john} alt="john"/>
                <img className='pic' src = {lin} alt="lin"/>
                <img className='pic' src = {kevin} alt="kevin"/>
                <img className='pic' src = {dom} alt="dom"/>
            </div>
        </div>
    )
}

export default Home