import john from '../assets/john.jpg'
import lin from '../assets/lin.jpg'
import BouncingImage from '../stylingpage/BouncingImage'
import kevin from '../assets/kevin.jpg'
// import john from '../assets/john.jpg'

function Home () {
    return (
        <div>
            <BouncingImage/>
            <img src = {john} alt="john"/>
            <img src = {lin} alt="john"/>
            <img src = {kevin}/>
            {/* <img src = {john} alt="john"/>
            <img src = {john} alt="john"/> */}
        </div>
    )
}

export default Home