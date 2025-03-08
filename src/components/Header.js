import Logo from '../../public/logo.svg'

export default function Header(data){

    let menu = data.data

    return <div id='header'>
        <div className='content'>
            <div className="navbar">
                <div className="nav-brand">
                    <a href='/'><Logo maxwidth={300} height={50} /></a>
                </div>
                <div className="nav-side navbar-menu right">
                    <label id="menu-toggle">
                        <button className="menu-btn">
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </label>
                </div>
                <div className="nav-side navbar-toggle">
                    <ul className="menu">
                    {menu.map((item, index) => (
                        <li key={index}><a href={item.slug}>{item.title}</a></li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}