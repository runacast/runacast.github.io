export default function Header(){
    
    const year = new Date().getFullYear();

    return <div id="footer">
        <div className="content">
            <ul className="list">
                <li><a href="/location">Ubicación</a></li>
                <li><a target="_blank" href="https://www.facebook.com/rimaymanta">Facebook</a></li>
            </ul>
            <br></br>
            <sub>{year} RimayManta - Blog de opinión y cultura kichwa.</sub>
        </div>
    </div>
}