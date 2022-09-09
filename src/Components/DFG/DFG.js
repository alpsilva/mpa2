import SVG from 'react-inlinesvg'

const DFG = ({DFGProps}) => {
    return (
    <div>
        <SVG width={800} src={DFGProps}/>
    </div>
    );
};

export default DFG;