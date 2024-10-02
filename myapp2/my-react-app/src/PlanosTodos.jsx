import './PlanosTodos.css';
import Planos from './Planos';
import PlanosGolden from './PlanosGolden';

function PlanosTodos () {
    return(
        <>
            <div className="container-planos">
                <Planos 
                titulo='Plano Iniciante' 
                subTitulo='Para pessoal com zero experiencia' 
                items={['3 Aulas de Regularização Fundiária','1 Vídeo Chamada com a Maria','Pack do pézinho', 'Fotos de bíquine na paria']}
                />
        
                <PlanosGolden 
                titulo='Plano Profissional' 
                subTitulo='Para pessoal com experiencia moderada' 
                items={['10 Aulas de python','1 Vídeo Chamada com o Djalma','Foto da grande Anaconda', 'Direito a uma sugada Premium']}
                />
            </div>
        </>
    )
};

export default PlanosTodos;