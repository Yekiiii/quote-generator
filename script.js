/*QUOTES ARRAY*/
const quotes = [
    {
        text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        text: "Keep your face always toward the sunshine - and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        text: "If you believe in yourself and have dedication and pride - and never quit, you'll be a winner. The price of victory is high but so are the rewards.",
        author: "Bear Bryant"
    },
    {
        text: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        author: "Vince Lombardi"
    },
    {
        text: "If opportunity doesn't knock, build a door.",
        author: "Milton Berle"
    }
    
];
const qText = document.getElementById("text");
const newQuote = document.getElementById("new-quote");
const author = document.getElementById("author");
const tweetQuote = document.getElementById("tweet-quote");

newQuote.addEventListener("click",()=>{
    console.log("clicked")
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const randomQuote= quotes[randomIndex];
    qText.textContent=randomQuote.text;
    author.textContent=`- ${randomQuote.author}`;
})

tweetQuote.addEventListener("click", () => {
    const currentQuote = qText.textContent;
    const currentAuthor = author.textContent;
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote}" - ${currentAuthor}`)}`;
    window.open(twitterURL, "_blank");
});