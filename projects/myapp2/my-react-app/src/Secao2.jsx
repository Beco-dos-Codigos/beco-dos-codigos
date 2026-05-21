import imgsec2 from './assets/page_sec2.png'

function Secao2 () {
    return(
        <>
            <div className="secao2">
                <div className='secao2-texto'>

                    <div className='subtexto'>
                    <h1>AUTOMACAO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis amet, aliquam dolor et odio qui necessitatibus cumque saepe molestiae libero quod ducimus eligendi quam incidunt cum laboriosam voluptatum aperiam consequuntur.</p>
                    </div>
                </div>
                <img className='img-sec2' src={imgsec2} alt="" />
            </div>
        </>
    )
}

export default Secao2