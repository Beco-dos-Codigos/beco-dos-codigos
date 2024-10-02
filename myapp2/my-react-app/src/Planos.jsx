import './Planos.css';
import PlanosItem from './PlanosItem'
import PropTypes from 'prop-types';

function Planos (props) {
    return(
        <>
            <div className="card">
            <div className="card__border"></div>
            <div className="card_title__container">
                <span className="card_title">{props.titulo}</span>
                <p className="card_paragraph">
                {props.subTitulo}
                </p>
            </div>
            <hr className="line" />
            <ul className="card__list">
            <li>{props.items.map((desc) => (<PlanosItem key={desc} texto={desc}/>))}</li>
            </ul>
            <button className="button">Adiquirir</button>
            </div>
        </>
    )
}

Planos.propTypes = {
    titulo: PropTypes.string.isRequired,
    subTitulo: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

Planos.defaultProps = {
    titulo: "Titulo",
    subTitulo: "Sub titulos",
    items: ["Item 1", "Item 2", "Item 3"],
}

export default Planos