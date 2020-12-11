
function Ingredient(props) {
    return(
        <div>
            {props.name}<button onClick={() => {props.addLayer(props.name)}}>
            {'>'}
            </button>
        </div>
    )
}

export default Ingredient