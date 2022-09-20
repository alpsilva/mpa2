import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Links } from '../../types/enums';

function Navigator() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav-buttons" style={{ width: "100%" }}>
        <Button variant="contained" onClick={navigate(Links.Filter)}>Filtros</Button>
        <Button variant="contained" onClick={navigate(Links.Demands)}>Demandas</Button>
        <Button variant="contained" onClick={navigate(Links.Activities)}>Tarefas</Button>
        <Button variant='outlined'>Recursos</Button>
      </div>
    </div>
  );
}

export default Navigator;
