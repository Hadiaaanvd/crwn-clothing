import "./menu.style.scss";
export const Menu = (props) => {
    return (
        <div className={`${props.size} menu-item`}>
        <div  className="background-image" style={{
            backgroundImage: `url(${props.imageUrl})`
        }}/>
        <div className='content'>
            <div className='title'>{props.title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
}
