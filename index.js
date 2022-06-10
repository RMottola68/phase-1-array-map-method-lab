const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let titleCased = () => {
  return tutorials.map(function(title){
    let titles = title.split(' ');
    let capTitles = titles.map(function(item){
      return item[0].toUpperCase() + item.slice(1)
      
    })
    return(capTitles.join(' '))
  })
  
}
  
console.log(titleCased())




    // for(const item in array){
    // let title = array[item].split(' ')
    // let cappler = title.map( word => {
    //   (word[0].toUpperCase() + word.slice(1))
      
    // })
    
