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
const calculate_same_tag_count =(score)=>{
    return 1 + Math.log(score + 1)
}
const calculate_number_of_matches =(k)=>{
    return 1 + Math.log(k + 1)
}

const check_lang=(lang)=>{
    let languages = ["ar", "en", "fr", "in", "pt", "es", "tr", "ja"]
    return languages.includes(lang);
}
module.exports = { calculate_interaction_score, calculate_hashtag_score, calculate_keywords_score, calculate_same_tag_count, calculate_number_of_matches, check_lang };