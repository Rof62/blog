import styles from "./Content.module.scss"
import Serie from "./Serie"

export default function Content() {
    return (
        
            <div className="flex-fill container">
                <h1 className="my30">Découvrez nos dernières crittique !</h1>
                <div className={`card p20 ${styles.contentCard}`}>
                    <div className={`${styles.grid}`}>
                        <Serie />
                        <Serie />
                        <Serie />
                        <Serie />
                        <Serie />
                        <Serie />
                        <Serie />
                        <Serie />
                        <Serie />
                        <Serie />
                        <Serie />
                    </div>
                </div>
            </div> 

        
    )
}