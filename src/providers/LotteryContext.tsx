import { createContext, useEffect, useState } from "react"
import { ILotteries, ILotteryContext, ILotteryProviderProps, Ilottery } from "./@types";
import { api } from "../service/api";

export const LotteryContext = createContext({} as ILotteryContext)

export const LotteryProvider = ({ children }: ILotteryProviderProps) => {
    const [lottery, setLottery] = useState<ILotteries[]>([]);
    const [selectedLottery, setSelectedLottery] = useState<string>("");
    const [result, setResult] = useState<Ilottery | null>(null);

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
                    const { data } = await api.get(`https://loteriascaixa-api.herokuapp.com/api/${selectedLottery}/latest`)
                    setResult(data)
                } catch (error) {
                    console.error(error)
                }
            }
        }
        fetchResult();
    }, [selectedLottery])

    return (
        <LotteryContext.Provider value={{ lottery, setLottery, selectedLottery, setSelectedLottery, result, setResult }}>
            {children}
        </LotteryContext.Provider>
    )
}