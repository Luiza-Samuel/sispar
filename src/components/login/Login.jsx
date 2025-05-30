import { useNavigate } from "react-router-dom"
//import Capa from "../../assets/Tela Login/imagem tela de login.png";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss"

function Login() {

  const navigate = useNavigate() //Iniciando o hook useNavigate

//Função para quando eu clicar no otoao de entrar , me levar para tele de reembolsos 
  const irParaReembolsos = () => { navigate("/reembolsos")  //Redirecionando para a página de reembolsos
  }

  return (
    <main className={styles.mainLogin}>
      <section className={styles.containerFoto}>
        {/* <img src={Capa} alt="Foto de um navio cargueiro" /> */}
      </section>

      <section className={styles.formWapper}>
        <div className={styles.boxLogo}>
          <img src={Logo} alt="Logo da wilson sons" />
          <h1>Boas vindas ao Novo Portal SISPAR </h1>
          <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>

        <form action="">
          <input type="email" name="email" id="email" placeholder="Email" />

          <input type="password" name="password" id="password" placeholder="Senha" />

          <a href="">Esqueci minha senha</a>
          
          <div className={styles.boxButton}>
           <button onClick={irParaReembolsos} className={styles.buttonEntrar}>Entrar</button>
            <button className={styles.buttonCriar}>Criar conta</button>
            
          </div>

        </form>
      </section>
    </main>
  );
}
export default Login;
