import { useEffect } from "react"
import { api } from "./service/api"
import { Header } from "./components/Header"

export const App = () => {
  useEffect(() => {
    const result = async () => {
      try {
        const { data } = await api.get("https://loteriascaixa-api.herokuapp.com/api/megasena/latest")
      } catch (error) {
        console.log(error)
      }
    }
    result();
  }, [])

  return (
    <Header />
  )
}
