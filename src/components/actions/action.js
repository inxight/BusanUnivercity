export const korLanguge = "kor";
export const engLanguge = "eng";

export const korLangAction = (res) => {
    return {
        type:korLanguge,
        payload:res
    }
}

export const engLangAction = (res) => {
    return {
        type:EngLanguge,
        payload:res
    }
}

