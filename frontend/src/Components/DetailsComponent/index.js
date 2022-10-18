import { Box, Typography, Slider } from "@mui/material";
import { useState } from "react";

const DetailsTable = ({detailsTableProps, tarefas, setTarefas, caminhos, setCaminhos}) => {
   
    // const [ tarefasLevel, setTarefasLevel ] = useState(4);
    const [ caminhosLevel, setCaminhosLevel ] = useState(4);
    // const handleChange1 = (event) => {
    //     setTarefasLevel(event.target.value);
    //     setTarefas(event.target.value)
    //     console.log(tarefas,"Não estou aqui")
    //   }
      const handleChange2 = (event) => {
        setCaminhos(event.target.value)
        setCaminhosLevel(event.target.value);
      }
    //*const { tarefas, caminhos } = detailsTableProps;
    return (
        <Box sx={{width: "35%", height: "60%", backgroundColor: "#131E2F",}}>
            <Box sx={{height: '100%', width: '100%', paddingRight: '1em', display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                {/* <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Typography sx={{alignSelf: 'center'}} variant='p' color='#FBFBFF' >
                        Tarefas
                    </Typography>
                    <Slider onChange={handleChange1} value={tarefasLevel} sx={{width: '60%'}} min={0} max={4} step={1} marks/>
                </Box> */}
                <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                    <Typography sx={{alignSelf: 'center'}} variant='p' color='#FBFBFF' >
                        Caminhos
                    </Typography>
                    <Slider onChange={handleChange2} value={caminhosLevel} sx={{width: '60%'}} min={0} max={4} step={1} marks/>
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