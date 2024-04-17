

export function isNullOrUndefined(value:any){
    if(value == null || value == undefined){
        return true
    }else{
        return false
    }
}

export function createTaskBorderColor(value:number|undefined):string{
    switch (value){
        case undefined:
            return "green-600"
        case 1:
            return "blue-600"
        case 2:
            return "violet-600"
        case 3:
            return "fuchsia-600"
        case 4:
            return "pink-600"
        case 5:
            return "red-600"    
        default:
            return "white"   
    }
}

export function createLabelsColors(value:number):string[]{
    switch (value){
        case undefined:
            return ["bg-green-300","text-green-600"]
        case 1:
            return ["bg-green-300","text-green-600"]
        case 2:
            return ["bg-blue-300","text-blue-600"]
        case 3:
            return ["bg-red-300","text-red-600"]
        case 4:
            return ["bg-pink-300","text-pink-600"]
        case 5:
            return ["bg-yellow-300","text-yellow-600"]    
        default:
            return ["bg-green-300","text-green-600"]   
    }
}

export function createUserLabelColor(value:number):string[]{
    return ["",""]
}

