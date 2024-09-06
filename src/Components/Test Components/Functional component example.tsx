import React from "react";

interface LoginCompTestProps{
    counterFunction: () => void,
}

export const FunctionalComponentExample: React.FC<LoginCompTestProps> = (props: LoginCompTestProps) => {


    return(
        <>
            <button onClick={props.counterFunction}>Click me Daddy</button>
        </>
    )
}