import { Dashboard } from "./components/Dashboard"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"

export const App = () => {

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyles />
      <Dashboard />
    </div>
  )
}
