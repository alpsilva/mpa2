import SVG from 'react-inlinesvg'

const DFG = ({DFGProps}) => {
    return (
    <div>
        <SVG style={{position: 'absolute'}} width={800} src={DFGProps}/>
    </div>
    );
};

export default DFG;