import { useEffect, useState } from 'react';
import styles from './Detail.module.css';
import { useParams, useNavigate } from 'react-router';
import { type CoinProps } from './Home';
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

    useEffect(() => {
        async function getCoin() {
            try {
                fetch(`https://rest.coincap.io/v3/assets/${cripto}?apiKey=1846e9cd142e96b9affc38819d8987e05307736d40d3f4cb0b61c0b412106b7a`)
                .then((response) => response.json())
                .then((data: DataProps) => {
                    
                    if ("error" in data) {
                        navigate("/")
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
                        formatedMarket: priceCompact.format(Number(data.data.marketCapUsd)),
                        formatVolume: priceCompact.format(Number(data.data.volumeUsd24Hr)),
                    }

                    setCoin(resultData);
                });
            } catch (error) {
                console.log(error);
                navigate("/")
            }
        }
         
        getCoin();
    }, [cripto, navigate]);


    return (
        <main className={styles.container}>
            <div className={styles.center}>
                <h1>Detalhes da Criptomoeda {cripto}</h1>
                <h1>{coin?.name}</h1>
                <h1>{coin?.formatedPrice}</h1>
                <h1>{coin?.formatedMarket}</h1>
                <h1>{coin?.formatVolume}</h1>
                <h1>{coin?.changePercent24Hr}</h1>
                <h1>{coin?.explorer}</h1>
                <h1>{coin?.supply}</h1>
                <h1>{coin?.maxSupply}</h1>
                <h1>{coin?.rank}</h1>
            </div>
        </main>
    )
}