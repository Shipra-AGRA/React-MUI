import { Box, MenuItem, TextField } from "@mui/material"
import React from "react"
import { useState } from "react"

const MuiSelect = () => {
    const [country, setCountry] = useState('')
    const [countries,setCountries]=useState<string[]>([])
    console.log("country", country)
    console.log("countries",countries)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value as string)
    }

    const handleSelect=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value=e.target.value
        setCountries(typeof(value)==='string'?value.split(','):value)
    }
    return (
        <Box width="250px">
            <TextField label="select country" select value={country} onChange={handleChange} fullWidth>
                <MenuItem value=''>Select country</MenuItem>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="JP">Japan</MenuItem>
                <MenuItem value="KO">Korea</MenuItem>
            </TextField>


            <TextField label="select country" select value={countries}
                onChange={handleSelect} fullWidth
                SelectProps={{multiple:true}}
                helperText="please select your country" size="small"
                error={countries.length==0}>
                <MenuItem value=''>Select country</MenuItem>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="JP">Japan</MenuItem>
                <MenuItem value="KO">Korea</MenuItem>
            </TextField>
        </Box>
    )
}
export default MuiSelect