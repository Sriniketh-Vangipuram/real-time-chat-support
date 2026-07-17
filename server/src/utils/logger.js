const getTimestamp=()=> new Date().toISOString();

const info=(message)=>{
    console.log(`[${getTimestamp()}] [INFO] ${message}`);
};

const warn=(message)=>{
    console.warn(`[${getTimestamp()}] [WARN] ${message}`)
};

const error=(message)=>{
    console.error(`[${getTimestamp()}] [ERROR] ${message}`);
};

export const logger={
    info,
    warn,
    error,
};