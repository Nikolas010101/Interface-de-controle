import './index.css';
import {useEffect, useState} from "react"
import CallButton from "./components/CallButton"
import EmotionButton from "./components/EmotionButton"
import Slider from "./components/Slider"
import micOn from "./Imagens/mic-on.svg"
import phone from "./Imagens/phone.svg"
import videoOn from "./Imagens/video-on.svg"
import wip from "./Imagens/wip.png"

function App() {

    const [state, setState] = useState({
        pan: 0,
        tilt: 0,
        emotion: "neutral"
    })

    useEffect(() => {
        const url = new URL('http://127.0.0.1:5000/control')
        const params = new URLSearchParams({ pan: state.pan, tilt: state.tilt })
        url.search = params
        fetch(url).then(r => r.json()).then((r) => console.log(r)).catch(r => console.log("Não foi possível realizar a requisição"))
    }, [state])

    return <section className="grid-container">
        <img className="placeholder" src={wip} alt="" />
        <div className="controls">
            <div className="call-control">
                <div className="call-buttons">
                    <CallButton src={phone} title="Desligar" callback={console.log} />
                    <CallButton src={micOn} title="Desativar microfone" callback={console.log} />
                    <CallButton src={videoOn} title="Desativar vídeo" callback={console.log} />
                </div>
                <div className="emotion-buttons">
                    <EmotionButton emotion="neutral" callback={console.log} title="Neutralidade" />
                    <EmotionButton emotion="happy" callback={console.log} title="Felicidade" />
                    <EmotionButton emotion="sad" callback={console.log} title="Tristeza" />
                    <EmotionButton emotion="surprise" callback={console.log} title="Surpresa" />
                    <EmotionButton emotion="doubt" callback={console.log} title="Dúdivda" />
                </div>
            </div>
            <div className="servo-control">
                <Slider text="Controle Pan" id="pan" state={state} setState={setState} />
                <Slider text="Controle Tilt" id="tilt" state={state} setState={setState} />
            </div>
        </div>
    </section>
}
export default App