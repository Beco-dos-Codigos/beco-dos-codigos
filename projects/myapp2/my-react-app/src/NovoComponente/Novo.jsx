import styles from './Novo.module.css'

function Novo (props) {


    const estiloObj = {
        backgroundColor: "#FFF",
        color: "white",
        boderRadius: "5px"
    }

    return(
        <button style={estiloObj} className={styles.button}>
            {props}
        </button>
    )
}

export default Novo