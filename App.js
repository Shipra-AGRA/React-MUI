import ReactDOM from 'react-dom/client'
import MuiTypography from './src/components/MuiTypography'

const App=()=>{
    console.log("hello")
    return(
        <>
        <MuiTypography/>
        </>
    )
}
export default App

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)