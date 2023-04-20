export interface User {
    username: string,
    fname:string,
    lname:string,
    age:number,
    email:string,
    password:string,
    isAdmin:boolean,
    gender:string,
    phone:string,
    request:boolean

}
export interface UserLogin{
    email:string,
    password:string
}
