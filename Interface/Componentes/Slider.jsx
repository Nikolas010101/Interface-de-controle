function Slider({ id, state, setState, min = -90, max = 90, text = "" }) {

    function handleChange(event) {
        setState((prev) => {
            return { ...prev, [id]: parseInt(event.target.value) }
        })
    }

    return <div className="slider-container" id={id}>
        <h2 className="slider-text">{text}</h2>
        <div className="slider-inner-container">
            <input className="slider" type="range" min={min} max={max} value={state[id]} onChange={handleChange} />
            <label htmlFor={id} className="slider-label">{state[id]}°</label>
        </div>
    </div>
}