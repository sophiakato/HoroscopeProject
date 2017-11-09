// var x = document.getElementById("myField").value;
// document.getElementById("output").innerHTML = determineHoroscope(sign);
//

var signs = ["Capricorn", "Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius", "Capricorn"];


function findDays(month){
    var monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var result = "";
    for (var i = 1; i <= monthDays[month]; i++) {
        result += "<option value'" + i + "'>" + i + "</options> ";
    }
    document.getElementById("days").innerHTML = result;
}

function determineSign(date) {
    date = parseInt(date);
    console.log(date);
    if(date <= 119) {
        return signs[0];
    }
    if(date<=218){
        return signs[1];
    }
    if(date<=320){
        return signs[2];
    }
    if(date<=419){
        return signs[3];
    }
    if(date<=520){
        return signs[4];
    }
    if(date<=620){
        return signs[5];
    }
    if(date<=722){
        return signs[6];
    }
    if(date<=822){
        return signs[7];
    }
    if(date<=922){
        return signs[8];
    }
    if(date<=1022){
        return signs[9];
    }
    if(date<=1121){
        return signs[10];
    }
    if(date<=1221){
        return signs[11];
    }
    if(date<=1231){
         return signs[12];
    }

}

function submit(month, days) {
    var month = document.getElementById("month").value;
    var days = document.getElementById("days").value;
    if(parseInt(days)<10){
        days = "0"+days;
    }
    var date = month + days;
    var sign = determineSign(date);
    document.getElementById("sign").innerHTML = sign;
    var message = findMessage(sign);
    document.getElementById("message").innerHTML = message;
    determineImage(sign);


}


function findMessage(sign){
    if(sign == signs[1]||signs[13]){
        return "The only known vegetarian crocodile in the world lives in India." +
            " You will feel strange, a bit like you are this crocodile in a faraway land," +
            " unable to reflect on expectations of the world around you however hard you try to make " +
            "choices that are solid, founded, and your own. " +
            "Try to cherish your individuality instead of shoving it aside and trying to fit in.";
    }
    if(sign == signs[2]){
        return "Stumbling into new relationships, many Pisces representatives will feel pressured to show something" +
            " that isn’t really in sync with their character. " +
            "Stay true to your inner voices and don’t allow anyone to push you over limits you are fully aware of." +
            " There is no need to rush into new things when you haven’t yet dealt with the old ones." +
            "This is a good moment to cleanse, to think about your routine and choices that made you sensitive to " +
            "the outer world. Exercise, keep your body in check and as healthy as possible, and don’t burden" +
            " your stomach with food you have trouble metabolizing.";
    }
    if(sign == signs[3]){
        return "You will have a chance to communicate about important matters,\
            but this still won’t satisfy your ego or make you feel centered as you normally feel.\
            With the current lack of focus, you need to spend time with people you love and do everything \
            you can to not stress our about the situation at work or your current inability to reach the \
            potential you know you were meant to reach. Try not to rely on the image of yourself that you wish to\
            show, but instead, give what you can to those in need and give yourself time \
            to share knowledge about things that made you hesitant or scared in the past.";

    }
    if(sign == signs[4]){
        return "Although you aren’t aware of all the moves made in marketing, you have a way to feel if" +
            " something is right for you or not, and this is the time to use this ability in all areas of " +
            "life." +
            "Don’t make investments if you aren’t well informed on their potential flow and" +
            "true nature of things you are investing in.Venus is about to move to the sign of Scorpio. " +
            "While this may not feel as energizing and empowering as its time spent in Libra, " +
            "you could fall in love, feel deep things for another human being, and remind yourself " +
            "of past life ties that left an impressive mark in your Soul.";
    }

    if(sign == signs[5]){
        return "Now that Mercury is in the sign of Sagittarius, you aren’t really sure where you were heading " +
            "and what you wanted to do about any situation in your life. " +
            "Getting lost is an excellent way to someday be found, but you need to be careful " +
            "not to disperse in too many directions to keep your life in order and your relationships " +
            "stable and filled with love. Overly rationalizing could endanger some of your bonds and you are " +
            "turned to other people a bit more than you need to be. Don’t lose your energy trying to " +
            "help those who don’t want your help. You need to remember your limitations and respect others " +
            "in their need to be exactly who they are.";
    }

    if(sign == signs[6]){
        return "You feel like you are at some sort of a beginning, even though you are bringing important work" +
            " to its end. This is a transitional period in lives of many Cancer representatives, when many " +
            "changes are to be made and you cannot get stuck in old patterns for long or you will feel depressed" +
            " and as if you cannot handle the pressure of the world pushing on you." +
            "Do something fun, something out of the ordinary, and spend this week outside of your home " +
            "if you have a chance to. Private businesses aren’t going to blossom as soon as some of you " +
            "would like them to, and you need time to think about your options and do something creative to " +
            "lift your energy up.";
    }
    if(sign == signs[7]){
        return "In Salem Witch Trials, two dogs were killed for witchcraft. " +
            "There is no way of saying just how much the human race has evolved from that moment, " +
            "and you can see everything that is wrong with perception of others now that Mars is in Libra and " +
            "the Sun still in Scorpio. There is no reason to be fatalistic in your anticipations and think of " +
            "doom when you obviously have things you can do to make things brighter and more fulfilling.\n" +
            "Deep souls-searching and speaking about matters that burden you hold the key to growth. " +
            "With the right crowd in your life, you can fill your home and Soul with love, beauty and devotion," +
            " instead of choosing to focus on issues that are out of your control.";
    }
    if(sign == signs[8]){
        return "Your optimism is a bit greater than you remember it and this gives enough energy to " +
            "focus and find the direction you seek. Still, with Mercury weakened by diversities of life, " +
            "you won’t have many chances to commit to details and stubbornly pursue points of focus you have " +
            "gathered and turned to along the way.\n" +
            "There is so much you wish to say, but your home should be reserved for peace and silence, " +
            "even if you live with many people and can’t really create much room to be alone." +
            " Spend time with children to feel your energy rushing in, play, allow yourself to be childish and less careful, " +
            "and create love needed to fill your heart with gratitude.";
    }
    if(sign == signs[9]){
        return "The first couple of days of the week are reserved for the final moves of Venus in your Sun sign. " +
            "Make yourself beautiful and care for the way you treat yourself," +
            " to get the maximum of its energy and balance where it feels good and strong. " +
            "As the week progresses, your energy could turn to the material world, debt and financial challenges " +
            "you did not resolve in time.\n" +
            "Money has to change hands and flow. If you do not let go yourself, it could get stolen or taken and sudden expenses are " +
            "possible in all areas of life. Carefully assess the situation and make moves with care for the future and for other people " +
            "in your life.";
    }
    if(sign == signs[10]){
        return "The spine of a crocodile is used as a chew toy by baby hippos. Believe that there is a purpose for every bit of you that" +
            " seems to be dismantled these days, remembering that you are still alive and thankful for the natural order of things you " +
            "are surrounded with. Frustration might grow, but tension should not be released through conflict if it is not truly constructive and necessary."+
            "This is the time to change your concepts and allow your personality to shine in the strangest of circumstances."+
            "Some Scorpios will be faced with the public eye, challenging their path and choices through criticism and judgment.";
    }
    if(sign == signs[11]){
        return "You have too much to say and cannot gather your thoughts to make a sensible whole. " +
            "Choose words with care or you might turn out to be too rational to care for your own heart, and stay gentle" +
            " with those who need a helping hand and someone to guide their way. It is in your power to forgive and" +
            " let go to emotion, even if it does not seem to be the smartest thing to do.\n" +
            "Common sense will kick in and professional matters will come into focus, alongside with relationships" +
            " that came to reach the point of no return. Think things through and use your mind to find the truth as " +
            "you always do, giving yourself room to breathe and relax as much as necessary to stay productive.";
    }
    if(sign == signs[12]){
        return "There are things that still stand in one place, and you would like to push them and move them where " +
            "they are supposed to go. Be careful not to expect too much from those who are having a hard time coping " +
            "with their current lifestyle, and try to understand reasons for their behavior instead of " +
            "forcing strict guidelines on their routine." +
            "If you open your mind, you will discover the truth behind choices of other people " +
            "and understand them a lot better. Do not let things stand in one place in your emotional world now that " +
            "change is needed, and turn to friends and those you care for to get the support " +
            "needed to let go and move on.";
    }
}

getImage(sign):
 // Given a user’s sign, return the horoscope image

document.getElementById("image").innerHTML = “<img src=’img/” + getImage(sign) + “.png’>”;

 }
