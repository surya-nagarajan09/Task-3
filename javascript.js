var cat = {
    name: 'Fluffy',activities: ['play', 'eat cat food'],catFriends: [{ name: 'bar',
        activities: ['be grumpy', 'eat bread omblet'],weight: 8,furcolor: 'white'}, 
      { name: 'foo', activities: ['sleep', 'pre-sleep naps'],weight: 3}]};

//Add height and weight to Fluffy
   cat.height=30;
   cat.weight=6;
//Fluffy name is spelled wrongly. Update it to Fluffyy
   cat.name="fluffyy";
//List all the activities of Fluffyy’s catFriends.;
for(i=0;i<cat.catFriends.length;i++)
   {
       for(j=0;j<cat.catFriends[i].activities.length;j++)
       {
           console.log(cat.catFriends[i].activities[j])
       }
   }
// Print the catFriends names.
 for(let i=0;i<cat.catFriends.length;i++)
 {
     console.log(cat.catFriends[i].name)
 }
 // Print the catFriends names.
let totalWeight=0;
for(let i=0;i<cat.catFriends.length;i++)
{
    totalWeight+=cat.catFriends[i].weight
}
console.log(totalWeight)
//activities of all cat
for (let key in cat) {
    if (key == "activities")
    {
      if (cat[key].length > 1)
      {
        for (i = 0; i < cat[key].length; i++) 
        {
          console.log(cat[key][i])
        }
      }
    }
    if (key == "catFriends") 
    {
      for (j = 0; j < cat[key].length; j++) 
      {
        for (k = 0; k < cat[key][j].activities.length; k++)
        {
          console.log(cat[key][j].activities[k]);
        }
      }
    }
  }
 // Add 2 more activities to bar & foo cats
  var newActivities = ['jumping', 'running all day'];
  cat.catFriends[0].activities.push(...newActivities);
  cat.catFriends[1].activities.push(...newActivities);    
  console.log(cat.catFriends)
/** update fur colour */
cat.catFriends[0].furcolor="green";
   console.log(cat.catFriends)
9.//change accident data to false;
for(let i=0;i<myCar.accidents.length;i++)
  {
      myCar.accidents[i].atFaultForAccident=false;
  }
  console.log(myCar)
10.//print accident date
for(let i=0;i<myCar.accidents.length;i++)
 {
     console.log(myCar.accidents[i].date)
 }
// Write a function called “printAllValues” which returns an newArray of all the input object’s values.
function printAllValues(obj) 
{
    return Object.values(obj);
}

  var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
  console.log(printAllValues(obj).join(" "));
// Write a function called “convertObjectToList” which converts an object literal into an array of arrays. var object = {name: 'ISRO', age: 35, role: 'Scientist'};

  function convertListToObject(obj) 
{
    return Object.entries(obj);
  }
  console.log(convertListToObject(Object))
// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
      var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
    
    function fromListToObject(arr) 
    {
      var newObject = {};
      for (var i= 0; i< arr.length; i++)
      {
        let key = arr[i][0];
        let value = arr[i][1];
        newObject[key] = value;
      }
      return newObject;
    }

    console.log(fromListToObject(array));
//Write a function called “transformGeekData” that transforms some set of data from one format to another.
Input (Object):

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for (var i= 0; i< arr.length; i++)
    {
      let newObject = {};	
      for (var j= 0; j< arr[i].length; j++)
      {
        let key = arr[i][0];
        let value = arr[i][1];
        newObject[key] = value;	
      }
      tranformEmployeeList.push(newObject);
    }
    return tranformEmployeeList;
  }

  console.log(transformEmployeeData(array));
   
//15
 var expected = {foo: 5, bar: 6};
  var expected1 = {foo: 6, bar: 5};
  var actual = {foo: 5, bar: 6};

  function assertObjectsEqual(actual, expected, testName){
    actualStr = JSON.stringify(actual)
    expectedStr = JSON.stringify(expected)
    if(actualStr == expectedStr){
      return "Passed"
    } else{
      return "FAILED ["+testName+"] Expected "+actualStr+", but got "+expectedStr
    }
  }
//comapre 
var securityQuestions = [
    {
      question: 'What was your first pet’s name?',
      expectedAnswer: 'FlufferNutter'
    },
    {
      question: 'What was the model year of your first car?',
      expectedAnswer: '1985'
    },
    {
      question: 'What city were you born in?',
      expectedAnswer: 'NYC'
    }
  ];

  function chksecurityQuestions(securityQuestions,question, answer) { 
    for (var i = 0; i < securityQuestions.length; i++)
    {
      for (let keys in securityQuestions[i])
      {
        if(keys == "question")
        {
          if(securityQuestions[i].question == question && securityQuestions[i].expectedAnswer == answer){
              return true;
          }
        }
      }
    }

  return false; 

  }
//list age below 20;
function returnMinors(arr)
{ var newObj = []; 
for (var i = 0; i< arr.length; i++)
{ 
if (arr[i].age < 20)
{
newObj.push(arr[i]);
} 
}

return newObj; 
} 
console.log(returnMinors(students));

