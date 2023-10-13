function reverseWords(sentence) {
    // Split the sentence into words using regular expression to handle multiple spaces
    const words = sentence.split(/\s+/);

    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words back into a sentence with spaces
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Convert the word to an array of characters, reverse it, and join it back
    return word.split('').reverse().join('');
}

// Input sentence
const inputSentence = prompt('Enter a sentence:'); // Prompt for user input

// Call the reverseWords function
const reversedSentence = reverseWords(inputSentence);

// Output the reversed sentence
console.log('Reversed Sentence:', reversedSentence);
