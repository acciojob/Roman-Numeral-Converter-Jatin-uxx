function convertToRoman(num) {
  	let str=""
let map= new Map( )
map.set('M',1000)
map.set('D', 500)
map.set('CD', 400)
map.set('C', 100)
map.set('XC', 90)
map.set('L', 50)
map.set('XL', 40)
map.set('X', 10)
map.set('IX', 9)
map.set('V', 5)
map.set('IV', 4)
map.set('I', 1)

     
      
      for(let [char,value] of map)
      {
      while(num>=value)
      {
           str+=char
          num-=value
         
         
      }
      
      }
       return str
    
      
      

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
