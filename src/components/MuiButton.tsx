import { Button, ButtonGroup, Stack } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

const MuiButton = () => {
    return (
        <>
            <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                    <Button variant="text" href="https://google.com">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Button color="primary" variant="contained">Primary</Button>
                    <Button color="secondary" variant="contained">secondary</Button>
                    <Button color="error" variant="contained">Error</Button>
                    <Button color="warning" variant="contained">Warning</Button>
                    <Button color="success" variant="contained">Success</Button>
                    <Button color="info" variant="contained">Info</Button>
                </Stack>
                <Stack direction="row" spacing={2} display="block">
                    <Button variant="contained" size="small">Small</Button>
                    <Button variant="contained" size="medium">Medium</Button>
                    <Button variant="contained" size="large">Large</Button>

                    <Button variant="contained" startIcon={<SendIcon />} disableElevation disableRipple>Send</Button>
                    <IconButton aria-label='send' color="secondary" size="large"><SendIcon /></IconButton>
                </Stack>
                <Stack direction="row">
                    <ButtonGroup variant="contained" orientation="vertical" size="small"
                        color="secondary" aria-label="button-group">
                        <Button>Left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
            </Stack>
        </>
    )
}
export default MuiButton