import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Analises from "../../assets/Dashboard/Análises.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";
//importando a NavBar no Reembolsos
import NavBar from "../navbar/NavBar.jsx"

function Rembolsos() {
  return (
    <div>
      <NavBar />

      <header>
        <img src={Home} alt="Casinha da header" />
        <img src={Seta} alt="Setinha da header" />
        <p>Reembolsos</p>
      </header>

      <main className={styles.mainRembolsos}>
        <h1>Sistema de Reembolsos</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>

        
        <section className={styles.containerCards}>
            
            <article className={styles.card}>
              <img src={SolicitarReembolso} alt="" />
              <p>Solicitar Reembolso</p>
            </article>
  
            <article className={styles.card}>
              <img src={Analises} alt="" />
              <p>Verificar análises</p>
            </article>
  
            <article className={styles.card}>
              <img src={SolicitarHistorico} alt="" />
              <p>Histórico</p>
            </article>
          </section>

        <section className={styles.containerDados}>

          <div>
            <img nomedaclass={NumeroSolicitados} 
            fonte={NumeroSolicitados} alt=""/>
            <h4>182</h4>
            <p>Solicitados</p>
          </div>

          <div>
            <img nomedaclass={NumeroAnalises} fonte={NumeroAnalises}alt=""></img>
            <h4>74</h4>
            <p>Em análise</p>
          </div>
          <div>
            <img nomedaclass={NumeroAprovados} fonte ={NumeroAprovados}alt=""></img>
            <h4>195</h4>
            <p>Aprovados</p>
          </div>
          <div>
            <img nomedaclass={umeroRejeitados} fonte={NumeroRejeitados} alt=""></img>
            <h4>41</h4>
            <p>Rejeitados</p>
          </div>
          </section>

          <section className={styles.containnerSistema}>
            <img src={Sistema} alt=""/>
            <a href="">Sistema Atualizado.</a>
          </section>
      </main>
    </div>
  );
}
export default Rembolsos;
