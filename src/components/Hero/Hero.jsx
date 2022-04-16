import './Hero.css';

export default function Hero(){
    return(
        <div className="box">
        <div className="box1">
            <h1>Clara Iniesta Llop</h1>
            <p>12/05/1997</p>
            <p>C/Castillejos, 424</p>
            <p>Barcelona</p>
            <a href="email">3a.clarainiesta17@gmail.com</a>
            <p>(+34) 670886083</p>
            <a href="https://github.com/Claarainiesta17">GitHub</a>
        </div>
            <hr/>
            <div className="box2">
            <h2>About me</h2>
            <p>👩‍💻Programming student with high aspirations!</p>
            <p>🌎Traveling, cooking and eating are my passions!</p>
            <p>🎹Musician, musicologist and museologist!</p>
            <p>🌟Live for what you create and die protecting it!</p>
            </div>
            <hr/>
        </div>
    )
}