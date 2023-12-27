import { useContext, useState } from "react"
import { ILotteries } from "../../providers/@types";
import { LotteryContext } from "../../providers/LotteryContext";
import { StyledBox } from "./styled";
import logo from "../../assets/Logo_Sena.png";
import { FontParagraph } from "../../styles/typograph";

export const Dashboard = () => {
    const [background, setBackground] = useState<string>("");

    const { lottery, selectedLottery, setSelectedLottery, result } = useContext(LotteryContext);

    const results: string[] | undefined = result?.dezenas;

    console.log(result)

    return (
        <StyledBox background={background}>

            <section className="infoLottery">

                <select
                    value={selectedLottery}
                    onChange={(e) => {
                        setSelectedLottery(e.target.value)
                        setBackground(e.target.value)
                    }}>
                    {lottery.map((lotteryData: ILotteries, index: number) => (
                        <option key={index} value={lotteryData}>{lotteryData}</option>
                    ))}
                </select>

                <div>
                    <img src={logo} alt="Logo de um trevo de quatro folhas" />
                    <FontParagraph font="big">{selectedLottery.toUpperCase()}</FontParagraph>
                </div>

                <FontParagraph>Concurso: {result?.concurso} - {result?.data}</FontParagraph>

            </section>

            <section className="numbersDrawn">
                {result && (
                    <FontParagraph>{results?.join(" - ")}</FontParagraph>
                )}
            </section>
        </StyledBox>
    )
}