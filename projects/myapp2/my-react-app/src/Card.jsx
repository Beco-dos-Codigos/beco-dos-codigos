import PropTypes from 'prop-types';

function Card(props){
    return(
        <div className="card">
            <div className="tools">
                <div className="circle">
                <span className="red box"></span>
                </div>
                <div className="circle">
                <span className="yellow box"></span>
                </div>
                <div className="circle">
                <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
            </div>
            <img className='card-image' src={props.cardImg}
            height={200} 
            alt="Ilustração de Regularização Fundiária"/>
            <h2 className='card-title'>Regularização Fundiária</h2>
            <p className='card-text'>Trabalhamos com Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo voluptate praesentium.</p>
        </div>
    )
}

// Validação de props usando PropTypes
Card.propTypes = {
    cardImg: PropTypes.string.isRequired,
};


export default Card