import './CardDepoimento.css';
import './Depoimentos.css'
import PropTypes from 'prop-types';


function CardDepoimento (props) {
    return(
        <>
            <div className="testimonial-card">
                <img src={props.foto} alt={props.nome} className="testimonial-photo" />
                <div className="testimonial-content">
                    <h3>{props.nome}</h3>
                    <p>{props.profissao}</p>
                    <p className='comentario'>&quot;{props.relato}&quot;</p>
                </div>
            </div>
        </>
    )
}

CardDepoimento.propTypes = {
    foto: PropTypes.string,
    nome: PropTypes.string,
    profissao: PropTypes.string,
    relato: PropTypes.string,
}
CardDepoimento.defaultProps = {
    foto: "0",
    nome: "Teste",
    profissao: "Dev",
    relato: "Top",
}

export default CardDepoimento;
