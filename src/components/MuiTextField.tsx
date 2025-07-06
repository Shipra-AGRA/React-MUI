import { InputAdornment, Stack, TextField } from "@mui/material"

const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Password" variant="outlined" color="secondary" required
                    helperText="do not share your password" type="password" />

                <TextField label="Password" variant="outlined" color="secondary" required
                    helperText="do not share your password" type="password" disabled />

                <TextField label="Read only" InputProps={{readOnly:true}} value={"Read Only"}/>
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Amount"
                InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}}/>

                <TextField label="weight" InputProps={{endAdornment:<InputAdornment position="end">kg</InputAdornment>}}/>
            </Stack>
        </Stack>
    )
}
export default MuiTextField