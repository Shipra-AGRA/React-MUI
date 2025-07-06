import ReactDOM from 'react-dom/client'
import MuiTypography from './src/components/MuiTypography'
import MuiButton from './src/components/MuiButton'
import MuiTextField from './src/components/MuiTextField'
import MuiSelect from './src/components/MuiSelect'
import MuiRadioButton from './src/components/MuiRadioButton'
import MuiCheckBox from './src/components/MuiCheckBox'

const App=()=>{
    console.log("hello")
    return(
        <>
        {/* <MuiTypography/>
        <MuiButton/>
        <MuiTextField/>
        <MuiSelect/>
        <MuiRadioButton/> */}
        <MuiCheckBox/>
        </>
    )
}
export default App

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)