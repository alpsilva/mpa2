import { Box, Typography, Slider } from "@mui/material";

const DetailsTable = ({detailsTableProps}) => {
    const { tarefas, caminhos } = detailsTableProps;
    return (
        <Box sx={{width: "35%", height: "60%", backgroundColor: "#131E2F",}}>
            <Box sx={{height: '100%', width: '100%', paddingRight: '1em', display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Typography sx={{alignSelf: 'center'}} variant='p' color='#FBFBFF' >
                        Tarefas
                    </Typography>
                    <Slider value={tarefas} sx={{width: '60%'}} min={0} max={4} step={1} marks/>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Typography sx={{alignSelf: 'center'}} variant='p' color='#FBFBFF' >
                        Caminhos
                    </Typography>
                    <Slider value={caminhos} sx={{width: '60%'}} min={0} max={4} step={1} marks/>
                </Box>
            </Box>
            <Box sx={{backgroundColor: "#131E2F", height:'22%', width: '40%', paddingLeft: '1em', borderRadius: '0 0 15px 15px'}}>
                <Typography variant='p' color='#FBFBFF' >
                      Detalhes
                </Typography>
            </Box>
        </Box>
    )
}

export default DetailsTable;