function EmotionButton({ emotion, callback = () => { } }) {
    const emotions = Object.freeze({
        happy: '😀',
        surprise: '😲',
        sad: '😢',
        doubt: '🤔'
    })
    function handleClick(e) {
        callback(emotion)
    }
    return <div className="icon emotion-container" onClick={handleClick}><span className="emotion-text">{emotions[emotion]}</span></div>
}