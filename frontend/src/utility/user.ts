

export interface NewUserModule{
    firstName:string,
    lastName:string,
    username:string,
    email:string,
    password:string,
    invitationCode:string
}

export interface UserLogin{
    email:string,
    password:string
}

export interface UserPublicProfile{
    userName:string,
    _id:string,
    sigla:string
}