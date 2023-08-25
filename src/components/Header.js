import styles from "./Header.module.scss"
import logo from "../assets/img/logo-fil-rouge.png"

export default function Header() {
    return (
        <header className={`d-flex align-items-center ${styles.header}`}>
            <i className=" fas fa-bars mr10"></i> 
            <div className="flex-fill">
                <img src={logo} alt="logo du blog" />
            </div>
            <ul>
                <button className={`mr10 btn btn-primary`}>
                    <i className="fas fa-star mr5"></i>
                    <span>Favoris</span>
                </button>
                <button className={`mr10 btn btn-primary-reverse`}> 
                    <i className=" fas fa-right-to-bracket mr5"></i> 
                    <span>Connexion</span>
                </button>
            </ul>
        </header>
    )
}
