import ReactDOM from 'react-dom/client'

const App=()=>{
    console.log("hello")
    return(
        <>
        <h1>Hello</h1>
        </>
    )
}
export default App

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)