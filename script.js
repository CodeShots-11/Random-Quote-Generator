const motivationalQuotes = [
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" }
  ];

  function createQuote (){
    let randomQuoteIndex = Math.floor(Math.random()*motivationalQuotes.length)
    document.getElementById('content').innerHTML=`<h4>${motivationalQuotes[randomQuoteIndex].quote}</h4>- ${motivationalQuotes[randomQuoteIndex].author}`
  }
  createQuote()
  document.querySelector('#btn').addEventListener("click", function(){
    return createQuote()
  })