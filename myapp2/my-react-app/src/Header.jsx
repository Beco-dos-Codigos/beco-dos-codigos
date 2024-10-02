function Header(){
    return(
        <header>
            <nav className="header-nav">
                <ul>
                    <li className="headeritems"><a href="#" className="headerlinks"><button className="btn-elegante">Home</button></a></li>
                    <li className="headeritems"><a href="#" className="headerlinks"><button className="btn-elegante">About</button></a></li>
                    <li className="headeritems"><a href="#" className="headerlinks"><button className="btn-elegante">Services</button></a></li>
                    <li className="headeritems"><a href="#" className="headerlinks"><button className="btn-elegante">Contact</button></a></li>
                </ul>
            </nav>
            {/* <div className="banner">
                <div className="img-container">
                    <img src="/src/assets/banner.jpg" alt="" />
                </div>
                <h1 className="titulo">Beco dos Códigos!</h1>
                <h2>asd</h2>
                <p>erferff</p>
            </div> */}
        </header>
    )
}

export default Header