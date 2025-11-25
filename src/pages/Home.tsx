import { BsSearch } from "react-icons/bs";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router";
import { useEffect, useState, type FormEvent } from "react";

interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  vwap24Hr: string;
  changePercent24Hr: string;
  rank: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  explorer: string;
  formatedPrice?: string;
  formatedMarket?: string;
  formatVolume?: string;
}

// array dos objetos coinProps
interface DataProps {
  data: CoinProps[];
}

export default function Home() {
  const [input, setInput] = useState("");
  const [coins, setCoins] = useState<CoinProps[]>([]);

  useEffect(() => {
    // eslint-disable-next-line
    getCoins();
  }, []);

  async function getCoins() {
    fetch(
      "https://rest.coincap.io/v3/assets?limit=10&offset=0&apiKey=1846e9cd142e96b9affc38819d8987e05307736d40d3f4cb0b61c0b412106b7a"
    )
      .then((response) => response.json())
      .then((data: DataProps) => {
        const coinsData = data.data;

        const price = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });

        const priceCompact = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact",
        });

        const formatedResult = coinsData.map((coin) => {
          const formated = {
            ...coin,
            formatedPrice: price.format(Number(coin.priceUsd)),
            formatedMarket: priceCompact.format(Number(coin.marketCapUsd)),
            formatVolume: priceCompact.format(Number(coin.volumeUsd24Hr)),
          };
          return formated;
        });

        setCoins(formatedResult);
      });
  }

  const navigate = useNavigate();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (input === "") {
      alert("Digite o nome da criptomoeda");
      return;
    }

    navigate(`/detail/${input}`);
  }

  function handleGetMore() {
    alert("Carregando mais criptomoedas...");
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o nome da criptomoeda"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <BsSearch size={30} color="#FFF" />
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
          {coins.length > 0 &&
            coins.map((item: CoinProps) => (
              <tr className={styles.tr}>
                <td className={styles.tdLabel} data-label="Moeda">
                  <div className={styles.name}>
                    <img
                      className={styles.logo}
                      alt="Logo Cripto"
                      src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`}
                    />
                    <Link to={`/detail/${item.id}`}>
                      <span>{item.name}</span> | {item.symbol}
                    </Link>
                  </div>
                </td>
                <td className={styles.tdLabel} data-label="Valor mercado">
                  {item.formatedMarket}
                </td>
                <td className={styles.tdLabel} data-label="Preço">
                  {item.formatedPrice}
                </td>
                <td className={styles.tdLabel} data-label="Volume">
                  {item.formatVolume}
                </td>
                <td
                  className={
                    Number(item.changePercent24Hr) > 0
                      ? styles.tdProfit
                      : styles.tdLoss
                  }
                  data-label="Variacao 24h"
                >
                  <span>{Number(item.changePercent24Hr).toFixed(2)}%</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button className={styles.buttonMore} onClick={handleGetMore}>
        Carregar mais criptomoedas
      </button>
    </main>
  );
}
