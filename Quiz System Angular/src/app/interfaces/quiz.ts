

export interface Quiz {
    subject:string,
    question: {
        questionContent:string,
        answer:string,
        options: string[],
        mark:number
    }[]

}
