import SVG from 'react-inlinesvg'

const DFG = ({DFGProps}) => {
    const { image } = DFGProps; 
    return (
    <div>
        <SVG src={image}/>
    </div>
    );
};

export default DFG;