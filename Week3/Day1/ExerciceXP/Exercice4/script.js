// Question 2 : creation of allBooks' array

let allBooks ;

// Question 3 : initilisation of the array

allBooks = [
    {
        title :  "Go easy",
        author : "Abel Ngbandaman",
        image : "",
        alreadyRead : false
    },
    {
        title :  "Go easy on me",
        author : "Noel Ngbandaman",
        image : "",
        alreadyRead : false
    }
]

// Question 4 :
bookProperties = ['title','author','image','alreadyRead']; //


// creation of table
let table = document.createElement('table')  
document.querySelector('div').appendChild(table); 

// creation of rows
for (let rowNumber = 0; rowNumber < 3; rowNumber++){
    let row = document.createElement('tr')  
    document.querySelector('table').appendChild(row); 
    if(rowNumber === 0){// adding headers' table
        bookProperties.forEach(propertie => {
        let column = document.createElement('td')  
        let newTextNode = document.createTextNode(propertie);
        column.appendChild(newTextNode);
        document.querySelector('tr').appendChild(column); 
       });
       continue;
    // }else{
    //             let column = document.createElement('td')
    //             let newTextNode = document.createTextNode('eee');
    //             column.appendChild(newTextNode);
    //             document.querySelector('tr').appendChild(column);
    // 
    }
    
    // let newTextRow = document.createTextNode('roww');
    // row.appendChild(newTextRow);

}

