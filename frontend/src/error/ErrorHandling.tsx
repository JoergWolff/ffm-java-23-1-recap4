type ErrorHandlingProps ={
    errorMessage: string,
}
export default function ErrorHandling(props: ErrorHandlingProps){
    return(
        <>
            <h2>{props.errorMessage}</h2>
        </>
    )
}