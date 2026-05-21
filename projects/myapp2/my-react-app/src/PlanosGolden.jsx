import './PlanosGolden.css';
import PlanosItem from './PlanosItem'
import PropTypes from 'prop-types';

function PlanosGolden (props) {
    return(
        <>
            <div className="cardGolden">
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

PlanosGolden.propTypes = {
    titulo: PropTypes.string.isRequired,
    subTitulo: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
}

export default PlanosGolden