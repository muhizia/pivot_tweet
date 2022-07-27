// const validateEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email);
// }
// const validatePasword = (pwd) => {
//     const check = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
//     return check.test(pwd);
// }
// const isNumeric = (str) => {
//     if (typeof str != "string") return false // we only process strings!  
//     return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
//         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
// }


const calculate_interaction_score =(reply_count, retweet_count)=>{
    return Math.log(1 + 2 * reply_count + retweet_count)
}
const calculate_hashtag_score =(same_tag_count)=>{
    let hashtag_score = 1
    if (same_tag_count > 10){
        hashtag_score = 1 + Math.log(1 + same_tag_count - 10)
    }
    return hashtag_score
} 
const calculate_keywords_score =(number_of_matches)=>{
    return 1 + Math.log(number_of_matches + 1)
}
module.exports = { calculate_interaction_score, calculate_hashtag_score, calculate_keywords_score };