import imgsec1 from './assets/page_sec1.png'

function Secao1 () {
    return(
        <>
            <div className="secao1">
                <img className='img-sec1' src={imgsec1} alt="" />
                <div className='secao1-texto'>
                    <div className='subtexto'>
                    <h1>GEOPROCESSAMENTO</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis amet, aliquam dolor et odio qui necessitatibus cumque saepe molestiae libero quod ducimus eligendi quam incidunt cum laboriosam voluptatum aperiam consequuntur.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Secao1