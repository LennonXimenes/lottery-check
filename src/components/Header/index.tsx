import { useEffect, useState } from "react"
import { api } from "../../service/api"
import { ILottery, IMegaSena } from "./@types";


export const Header = () => {
    const [lottery, setLottery] = useState<ILottery[]>([]);
    const [selectedLottery, setSelectedLottery] = useState<string>("");
    const [result, setResult] = useState<IMegaSena | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await api.get("https://loteriascaixa-api.herokuapp.com/api")
                setLottery(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchResult = async () => {
            if (selectedLottery) {
                try {
                    const { data } = await api.get(`https://loteriascaixa-api.herokuapp.com/api/${selectedLottery}`)

                    if (Array.isArray(data) && data.length > 0) {
                        const lastResult = data[0]
                        setResult(lastResult)
                        console.log(lastResult)

                    }
                } catch (error) {
                    console.error(error)
                }
            }
        }
        fetchResult();
    }, [selectedLottery])


    return (
        <header>
            <h1>Lottery Check</h1>
            <select value={selectedLottery} id="" onChange={e => setSelectedLottery(e.target.value)}>
                {lottery.map((lotteryName) => (
                    <option key={lotteryName} value={lotteryName}>{lotteryName}</option>
                ))}
            </select>

            <main>
                {result && (
                    <div>
                        <h2>Último Resultado</h2>
                        <p>Loteria: {result.dezenasOrdemSorteio}</p>
                    </div>
                )}
            </main>
        </header>
    )
}