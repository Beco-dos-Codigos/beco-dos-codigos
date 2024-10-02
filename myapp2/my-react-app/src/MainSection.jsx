function MainSection(){
    
    let lista = new Array(4);
    lista = ["Djalma", "Maria", "BDC", "Love"];
    
    return(
        <>
        {lista.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </>
    )
}
export default MainSection