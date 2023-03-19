const { useState, useEffect } = React
function Main() {

    const [state, setState] = useState({
        pan: 0,
        tilt: 0,
        emotion: ""
    })

    useEffect(() => {
        console.log(state)
        // TODO http request
    }, [state])

    return <section className="grid-container">
        <img className="placeholder" src="src/Imagens/wip.png" alt="" />
        <div className="controls">
            <div className="call-control">
                <div className="call-buttons">
                    <CallButton src="src/Imagens/phone.svg" title="Desligar" callback={console.log} />
                    <CallButton src="src/Imagens/mic-on.svg" title="Desativar microfone" callback={console.log} />
                    <CallButton src="src/Imagens/video-on.svg" title="Desativar vídeo" callback={console.log} />
                </div>
                <div className="emotion-buttons">
                    <EmotionButton emotion="neutral" callback={console.log} title="Neutralidade"/>
                    <EmotionButton emotion="happy" callback={console.log} title="Felicidade"/>
                    <EmotionButton emotion="sad" callback={console.log} title="Tristeza"/>
                    <EmotionButton emotion="surprise" callback={console.log} title="Surpresa"/>
                    <EmotionButton emotion="doubt" callback={console.log} title="Dúdivda"/>
                </div>
            </div>
            <div className="servo-control">
                <Slider text="Controle Pan" id="pan" state={state} setState={setState} />
                <Slider text="Controle Tilt" id="tilt" state={state} setState={setState} />
            </div>
        </div>
    </section>
}