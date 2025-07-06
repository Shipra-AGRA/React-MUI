import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"

const MuiRadioButton=()=>{

    const [yoe,setYoe]=useState('')
    console.log(yoe)

    const handleChange=(e:React.ChangeEvent<HTMLElement>)=>{
        setYoe(e.target.value)
    }
return(
    <Box>
        <FormControl>
            <FormLabel>Years of Experience</FormLabel>
            <RadioGroup name="job-experience-group"
            onChange={handleChange} row>
                <FormControlLabel control={<Radio/>} label="0-2" value="0-2"></FormControlLabel>
                <FormControlLabel control={<Radio/>} label="3-5" value="3-5"></FormControlLabel>
                <FormControlLabel control={<Radio/>} label="5-7" value="5-7"></FormControlLabel>
            </RadioGroup>
        </FormControl>
    </Box>
)
}
export default MuiRadioButton