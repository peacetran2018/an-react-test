function blankpage({match:{params:{type}}}){
    return(
        <div className="container">
            <div className="mt-3">
                <h2>{type}</h2>
            </div>
        </div>
    )
}

export default blankpage;