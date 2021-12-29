export const NumInc = () =>{
    return {
        type: "INCREMENT"
    }
}

export const NumDec = () =>{
    return {
        type: "DECREMENT"
    }
}

export const Mult = () =>{
    return {
        type: "MULTIPLICATION",
        value: 5
    }
}

export const Div = () =>{
    return {
        type: "DIVISION",
        value: 5

    }
}

export const ADD = () =>{
    return {
        type: "ADD_LIST"
    }
}

export const DEL = (id) =>{
    console.log("del id: ", id);
    return {
        type: "DELETE_LIST",
        id: id
    }
}
export const Change = (value) =>{
    return {
        type: "CHANGE",
        value: value
    }
}
