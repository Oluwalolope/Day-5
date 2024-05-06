//GETTING A REFERENCE FOR THE INPUT FORM
const inputForm = document.querySelector('.inputs');

//GETTING A REFERENCE FOR THE CLEAR BUTTON
const clearInput = document.querySelector('button');

//GETTING A REFERENCE FOR THE OUTPUT FIELD
const outputField = document.querySelector('.output');

//Function for cleaning text
const cleanText = (text) => {
  //Remove punctuation using regex and convert to lowercase
  let cleanText = text
    .replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, '')
    .toLowerCase();

  //Split the cleaned text into individual words
  let words = cleanText.split(/\s+/);
  return words;
};

//Listen for when the input field is submitted
inputForm.addEventListener('submit', (e) => {
  e.preventDefault(); //Prevent the page from refreshing
  let inputString = inputForm.querySelector('#sentence').value.trim();

  let cleanedWords = cleanText(inputString);
  generateCleanString(cleanedWords); //Output the result
});

//Function for clearing the input field
clearInput.addEventListener('click', () => {
    //Reset the input field
    inputForm.reset();
});

//Function to generate the results in the output
const generateCleanString = (cleanedWords) => {
  let cleanWords = cleanedWords;

  //Clear the output field after submission
  outputField.innerHTML = '';

  //Output each word from the clean sentence
  cleanWords.forEach((cleanWord) => {
    outputField.innerHTML += `<div>${cleanWord}</div>`;
  });
};
