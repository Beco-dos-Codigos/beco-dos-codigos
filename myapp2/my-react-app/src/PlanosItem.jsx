import './Planos.css';
import PropTypes from 'prop-types';

function PlanosItem (props) {
    return(
        <li className="card__list_item">
                <span className="check">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="check_svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                    ></path>
                    </svg>
                </span>
                <span className="list_text">{props.texto}</span>
            </li>
    )
};

// Validação de props usando PropTypes
PlanosItem.propTypes = {
    texto: PropTypes.string.isRequired,
};

export default PlanosItem;

