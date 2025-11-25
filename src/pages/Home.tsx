import { BsSearch } from "react-icons/bs";
import styles from "./Home.module.css";
import { Link } from "react-router";

export default function Home() {
  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Digite o nome da criptomoeda" />
        <button type="submit">
            <BsSearch size={30} color="#FFF"/>
        </button>
      </form>

      <table>
        <thead>
            <tr>
                <th scope="col">Moeda</th>
                <th scope="col">Valor mercado</th>
                <th scope="col">Preço</th>
                <th scope="col">Volume</th>
                <th scope="col">Variacao 24h</th>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr className={styles.tr}>
                <td className={styles.tdLabel} data-label="Moeda">
                    <Link to="/detail/bitcoin">
                        <span>Bitcoin</span> | BTC
                    </Link>
                </td>
                <td className={styles.tdLabel} data-label="Valor mercado">1T</td>
                <td className={styles.tdLabel} data-label="Preço">8.000</td>
                <td className={styles.tdLabel} data-label="Volume">2B</td>
                <td className={styles.tdLabel} data-label="Variacao 24h">
                    <span>1.20%</span>
                </td>
            </tr>
        </tbody>
      </table>
    </main>
  );
}
