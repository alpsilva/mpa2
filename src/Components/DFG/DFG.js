import SVG from 'react-inlinesvg'

const DFG = ({DFGProps}) => {
    // NÃO descomente esta porra
    // const { image } = DFGProps;
    return (
    <div>
        <SVG src={DFGProps}/>
    </div>
    );
};

export default DFG;