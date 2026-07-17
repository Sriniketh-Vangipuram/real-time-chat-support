import sanitizeHtml from "sanitize-html";

export const sanitizeMessage=(message)=>{

    if(typeof message!=="string"){
        return "";
    }
    
    return sanitizeHtml(message,{
        allowedTags:[],
        allowedAttributes:{},
    }).trim();
};

export const messageSanitizer={
    sanitizeMessage,
}