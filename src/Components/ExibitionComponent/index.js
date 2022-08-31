import { Box, Typography } from "@mui/material";

export default function ExibitionTable () {
    return (
        <Box sx={{width: "20%", height: "60%", backgroundColor: "#131E2F",}}>
            <Box sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '1em'}}>
                <Box sx={{display: 'flex', width: '100%'}}>
                    <Typography variant='p' color='#FBFBFF' >
                        Frequência
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', width: '100%'}}>
                    <Typography variant='p' color='#FBFBFF' >
                        Desempenho
                    </Typography>
                </Box>
            </Box>
            <Box sx={{backgroundColor: "#131E2F", height:'22%', width: '92%', paddingLeft: '1em', borderRadius: '15px'}}>
                <Typography variant='p' color='#FBFBFF' >
                  Exibir por:
                </Typography>
            </Box>
        </Box>
    )
}