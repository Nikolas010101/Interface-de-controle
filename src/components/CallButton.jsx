function CallButton({ src, title = "", callback = () => { } }) {
    function handleClick(e) {
        callback(title)
    }
    return <div className="icon" onClick={handleClick}><img className="icon-img" src={src} title={title} alt="" /></div>
}
export default CallButton