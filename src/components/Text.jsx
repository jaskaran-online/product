function Text({color = "black", children}){
    return (
        <p style={{color: color}}>
            {children}
        </p>
    )
}

export default Text;