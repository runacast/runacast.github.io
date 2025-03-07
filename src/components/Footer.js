export default function Header(){
    
    const year = new Date().getFullYear();

    return <div id="footer">
        <div className="content">
            <ul className="list">
                <li><a target="_blank" href="https://www.facebook.com/rimaymanta">Facebook</a></li>
            </ul>
            <br></br>
            <sub>RimayManta - Official site of RimayManta, where audiovisual content related to the culture of Salasaka is produced. All rights are reserved by the creator of this project.</sub>
        </div>
    </div>
}