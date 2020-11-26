import { FaChevronRight } from "react-icons/fa";
function ReusableCard(props) {
    return (
        <div className="card-shadown card" style={{ minHeight: "100%" }}>
            <div className="card-body">
                <h5 className="card-title">
                <i className={props.icon + ' mr-1'} style={{color:"#339AF0"}}></i>
                {props.title}</h5>
                <p className="card-text">
                    {props.description}
                </p>
            </div>
            <div className="list-group-flush list-group-noborder list-group">
                {props.links.map(link => (
                    <li key={link.title} className="list-group-item">
                        <a href={link.url} className="card-footer-link">{link.title} <i className="fas fa-chevron-right icon-right"></i></a>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default ReusableCard;