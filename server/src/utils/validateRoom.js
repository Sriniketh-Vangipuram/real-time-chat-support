export const validateRoom=(room)=>{
    if(typeof room !=="string"){
        return false;
    }

    return room.trim().length>0;
};

export const roomValidator={
    validateRoom,
}