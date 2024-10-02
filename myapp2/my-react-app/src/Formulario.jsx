
function Formulario () {
    return(
        <>
        <div className="containerForms">
            <div className="mainForm">
                <div className="title">Bem-vindo!</div>
                <div className="subtitle">Registre-se agora mesmo!</div>

                <div className="input-container ic1">
                    <input placeholder="" type="text" className="input" id="firstname"/>
                    <div className="cut"></div>
                    <label className="iLabel" htmlFor="firstname">Primeiro nome</label>
                </div>

                <div className="input-container ic2">
                    <input placeholder="" type="text" className="input" id="lastname"/>
                    <div className="cut"></div>
                    <label className="iLabel" htmlFor="lastname">Ultimo nome</label>
                </div>
                <div className="input-container ic2">
                    <input placeholder="" type="text" className="input" id="email"/>
                    <div className="cut cut-short"></div>
                    <label className="iLabel" htmlFor="email">Email</label>
                </div>
                <button className="submit" type="text">Registrar</button>
            </div>
            <div className="textForm">

                <h2>Coloque seus dados aqui</h2>
                <p>Cadastre-se agora com seu nome e e-mail para ficar por dentro das últimas novidades em programação e geoprocessamento. Junte-se à nossa comunidade e receba conteúdos exclusivos direto na sua caixa de entrada!</p>
            </div>
        </div>
        </>
    )
}

export default Formulario 