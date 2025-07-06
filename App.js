import ReactDOM from 'react-dom/client'
import MuiTypography from './src/components/MuiTypography'
import MuiButton from './src/components/MuiButton'

const App=()=>{
    console.log("hello")
    return(
        <>
        <MuiTypography/>
        <MuiButton/>
        </>
    )
}
export default App

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)