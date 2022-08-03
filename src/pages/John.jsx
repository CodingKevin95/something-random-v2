import "./John.css"
import audio from "../assets/skullsound2.mp3"
function John(){

function handelCLick(){
    const container = document.createElement('img')
    container.className="img"
    container.src = "https://media3.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"
    const sound = new Audio(audio);
    sound.play()
    document.getElementById("john-container").appendChild(container);
}

    return(
      <div id="john-container" className="JohnContainer">
        <h1>Johns Harrison</h1>
        <h3>"Professional Stack Overflow Explorer"</h3>
        <div>
          <div className="Container">
            <h2>Contacts:</h2>
              <a href="https://www.linkedin.com/in/jharrisons/">LinkedIn</a>
              <a href="https://github.com/JohnsHarrison">GitHub</a>
              <a href="mailto:jshar15089@gmail.com">Email</a>
          </div>
          <div className="Container">
            <h2>Tech:</h2>
            <p>Javascript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>React</p>
          </div>
        </div>
        <button onClick={() => handelCLick()}>Click to be spooked</button>
      </div>
    )
}

export default John
