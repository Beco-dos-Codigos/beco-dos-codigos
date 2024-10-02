import Card from "./Card"

function Quadro () {

    const imgs = [
        'beco0',
        'beco1',
        'beco2',

    ];

    return(
        <>
        <div className="quadros">{imgs.map((img) => (<Card key={img} cardImg={`src/assets/${img}.jpeg`}/>))}</div>
        </>
    )
}
export default Quadro