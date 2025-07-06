import ReactDOM from 'react-dom/client'
import MuiTypography from './src/components/MuiTypography'
import MuiButton from './src/components/MuiButton'
import MuiTextField from './src/components/MuiTextField'

const App=()=>{
    console.log("hello")
    return(
        <>
        {/* <MuiTypography/>
        <MuiButton/> */}
        <MuiTextField/>
        </>
    )
}
export default App

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)