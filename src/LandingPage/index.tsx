import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <h1>Yuesheng Huang</h1>
            <h2>CS 5610 Section 01</h2>
            <ul>
                <li><Link to="/Labs">Labs</Link></li>
                <li><Link to="/Kanbas">Kanbas</Link></li>
                <li><Link id="wd-github" to="https://github.com/yuesheng-huang/kanbas-react-web-app">Github</Link></li>
            </ul>
        </div>
    );
}