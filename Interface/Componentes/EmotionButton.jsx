function EmotionButton({ emotion, title = emotion, callback = () => { } }) {
    const emotions = Object.freeze({
        happy: '😀',
        surprise: '😲',
        sad: '😢',
        doubt: '🤔',
        neutral: '😐'
    })
    function handleClick(e) {
        callback(emotion)
    }
    return <div className="icon emotion-container" title={title} onClick={handleClick}><span className="emotion-text">{emotions[emotion]}</span></div>
}