import "./menu.style.scss";
import { withRouter } from "react-router-dom"
const Menu = ({title, imageUrl, size, linkUrl, history, match}) => {
    return (
        <div
            onClick={() => history.push(`${match.url}${linkUrl}`)}
            className={`${size} menu-item`}>
        <div  className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    )
}

export default withRouter(Menu);
