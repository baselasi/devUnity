
export interface ChildProps {
    onAction: (value: boolean) => void;
}

export interface DataBaseResponse{
    firstName:string,
    lastName:string,
    username:string,
}

export class User {
    username?:string
    userRole?:string
    isProjectManger(){this.userRole === "1";}
    isTeamHead():boolean{return  this.userRole === "2";}
  }