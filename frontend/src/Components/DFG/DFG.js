import SVG from 'react-inlinesvg'

const DFG = ({DFGProps}) => {
    return (
    <div>
        <SVG width={1280} height={700} src={DFGProps}/>
    </div>
    );
};

export default DFG;