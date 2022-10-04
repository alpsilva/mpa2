import { Backdrop, CircularProgress } from '@mui/material';

interface LoadingPopupProps {
    isLoading: boolean,
}

const LoadingPopup = (props: LoadingPopupProps) => {
    const { isLoading } = props;
    return(
        <div>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme)=> theme.zIndex.drawer + 1}}
                open={isLoading}
            >
                <CircularProgress color='inherit' />
            </Backdrop>
        </div>
    )
}