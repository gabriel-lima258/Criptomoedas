import { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { useParams, useNavigate } from "react-router";
import { type CoinProps } from "./Home";
interface ResponseDate {
  data: CoinProps;
}

interface ErrorData {
  error: string;
}

type DataProps = ResponseDate | ErrorData;

export default function Detail() {
  // pega o parametro da url
  const { cripto } = useParams();
  const navigate = useNavigate();

  const [coin, setCoin] = useState<CoinProps>();
  const [loading, setLoading] = useState(true); // loading para carregar dados api

  useEffect(() => {
    async function getCoin() {
      try {
        fetch(
          `https://rest.coincap.io/v3/assets/${cripto}?apiKey=1846e9cd142e96b9affc38819d8987e05307736d40d3f4cb0b61c0b412106b7a`
        )
          .then((response) => response.json())
          .then((data: DataProps) => {
            if ("error" in data) {
              navigate("/");
              return;
            }

            const price = Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            });

            const priceCompact = Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              notation: "compact",
            });

            const resultData = {
              ...data.data,
              formatedPrice: price.format(Number(data.data.priceUsd)),
              formatedMarket: priceCompact.format(
                Number(data.data.marketCapUsd)
              ),
              formatVolume: priceCompact.format(
                Number(data.data.volumeUsd24Hr)
              ),
            };

            setCoin(resultData);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }

    getCoin();
  }, [cripto, navigate]);

  // carregando a requisicao de api ou se nao tiver dados
  if (loading || !coin) {
    return (
      <div className={styles.container}>
        <h4 className={styles.center}>Carregando detalhes...</h4>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>{coin?.name}</h1>
      <h1 className={styles.center}>{coin?.symbol}</h1>

      <section className={styles.content}>
        <img
          src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
          alt={coin.name}
          className={styles.logo}
        />
        <h1>
          {coin?.name} | ({coin?.symbol})
        </h1>

        <p>
          <strong>Preço: </strong>
          {coin?.formatedPrice}
        </p>

        <p>
          <strong>Mercado: </strong>
          {coin?.formatedMarket}
        </p>

        <p>
          <strong>Volume: </strong>
          {coin?.formatVolume}
        </p>

        <p>
          <strong>Variacao 24h: </strong>
          <span
            className={
              Number(coin?.changePercent24Hr) > 0 ? styles.protift : styles.loss
            }
          >
            {Number(coin?.changePercent24Hr).toFixed(2)}%
          </span>
        </p>
      </section>

      
    </div>
  );
}
