
/* De sql date a javascript date*/
export const formatDate=(date)=>{
    let dateStr=date.split('.')[0]; // Esto toma la parte de hora y fecha de la date
    dateStr = dateStr.replace('T',' '); // Separamos con un espacio la hora y la fecha
    return new Date(dateStr);
}

/* Calculate the number of days/hours of a publication to date */
export const calculatePublication = (postDate) => {
    let formatPostDate=formatDate(postDate);
    let actualDate = new Date();
    alert(Date.now());
    alert(formatPostDate);
    let hours = (Date.now() - formatPostDate.getTime()) / 3600000;
    if (hours >= 24) {
        let days = Math.floor(hours / 24);
        return "" + days + " days ago";
    } else {
        return "" + hours + " hours ago";
    }
};