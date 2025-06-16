const natural = require("natural");

function analyzeSentiment(text) {
  const analyzer = new natural.SentimentAnalyzer("English", natural.PorterStemmer, "afinn");
  return analyzer.getSentiment(text.split(" "));
}

module.exports = { analyzeSentiment };
