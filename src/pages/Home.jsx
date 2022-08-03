import john from '../assets/john.jpg'
import lin from '../assets/lin.jpg'
import kevin from '../assets/kevin.jpg'
import dom from '../assets/dom.jpg'
import '../stylingpage/Home.css'

function Home () {
    return (
        <div className='group'>
            <h1 className='title'>Welcome to our page!</h1>
            <h2 className='subTitle'>We're excited to have you here</h2>
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