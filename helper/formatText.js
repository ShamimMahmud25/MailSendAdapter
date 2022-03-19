exports.formatText=(text)=>{
    return text.replace(/(\r\n|\n\r|\r|\n)/g, '<br>');
}
