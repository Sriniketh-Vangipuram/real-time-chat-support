const rooms=new Map();

//Add user to room
const addUser=({room,socketId,username})=>{
    if(!rooms.has(room)){
        rooms.set(room,[]);
    }

    const users=rooms.get(room);

    const alreadyExists=users.find(
        (user)=>user.socketId===socketId
    );

    if(!alreadyExists){
        users.push({
            socketId,
            username,
        });
    }

    return users;
};

//Remove user from room
const removeUser=(room,socketId)=>{
    if(!rooms.has(room)){
        return [];
    }

    const users=rooms
                .get(room)
                .filter((user)=>user.socketId!== socketId);
    if(users.length===0){
        rooms.delete(room);
        return [];
    }

    rooms.set(room,users);

    return users;
}

// Get users in a room
const getUsers=(room)=>{
    if(!rooms.has(room)){
        return [];
    }

    return rooms.get(room);
}

//Find which room socket belongs to
const getRoomBySocketId=(socketId)=>{
    for(const [room,users] of rooms.entries()){
        const exists=users.find(
            (user)=>user.socketId===socketId
        );

        if(exists){
            return room;
        }
    }

    return null;
};

//Remove everything
const clear=()=>{
    rooms.clear();
};

export const roomStore={
    addUser,
    removeUser,
    getUsers,
    getRoomBySocketId,
    clear,
}
