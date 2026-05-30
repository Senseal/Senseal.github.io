//**Random Text Script**
    const splashTexts = [ //Creates the variable "splashTexts" to store the texts. Each one is seporated by "", 
        "What the dog doin?",
        "Now with Mobile surport!!",
        "My wife left me.",
        "Touch fluffy tail.",
        "Y̸o̴u̵ ̷W̴i̶l̵l̸ ̴A̴t̸t̸o̵n̴e̸ ̸F̸o̴r̸ ̴Y̷o̸u̷r̸ ̵S̶i̴n̷s̵",
        "I hate it when people ask me what star sign I am. I am a sign from god. Start running.",
        "0x3a 0x44",
        "Senseal@Github.com:~$ gnome-open Index.html",
        "Is cloudflare down again?",
        '\"Don\'t you fucking dare steal any flavour texts from me" -Mofu',
        "Gaming",
        "Cant code? Ask stack overflow.",
        "Can I just get a hug please?",
        "I don't care who the HMRC sends I will not pay taxes.",
       "Did you know that Osama Bin Ladens computer was found to contain loads of pirated anime and games on it? ",
        "🗿",
        "Shawty had them apple bottom jeans (jeans) Boots with the jeans (jeans) The whole club was lookin' at her jeans (jeans)",
        "What has the dog done...",
        "Now tell me, who was in the showers at Ram Ranch?",
        "The HMRC is looking for me.",
        "Did you know that Osama Bin Laden liked K-on?",
        "Saddam Hussein's hiding place is somewhere on this website.",
        "Fumo Fumo ᗜˬᗜ",
        "Now with supprot for 3ds",
        "Did you know that the critically acclaimed MMORPG Final Fantasy XIV has a free trial, and includes the entirety of A Realm Reborn, the award-winning Heavensward, Stormblood & Shadowbringers expansions up to level 80 with no restrictions on playtime? Sign up, and enjoy Eorzea today!",
    ];
    var randomNumber = Math.floor(Math.random() * splashTexts.length); 
    //Variable "randomNumber" = A random decimal number between 0 and 1 - Math.random()
    //That is then multiplied by the length of the "splashTexts" array - splashTexts.length
    //Then rounded to the nearrest whole interger -  Math.floor(...)
    var textElement = document.getElementById("randomText"); //Seaches though the HTML document to find and store the eliment with the ID "randomText" in the variable "textElement"
    if (textElement) { // if variable textElement exists (wont perform if the vairable is not set)
    textElement.innerHTML = splashTexts[randomNumber]; // Uses the random number selected (var randomNumber) with the splashTexts array to pick out the chosesn text string
    // replaces the old HTML content with the ID "randomText" with the randonly chosesn text
    }
//**end
console.log("Oh look Creddits, My Favourite.");
console.log("JS used in sites old format (window colsing) https://twitter.com/thetimgor");
console.log("'Shit. uh. I dunno.' - Sophie (Splash texts maker)");
console.log("'Up to you! I don't mind at all whether you include me or not. - Grey-dee! (Legecy JS help)");



