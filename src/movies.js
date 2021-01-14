// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
    const map1 =arr.map(item=>{return item.director;})
    let map2=[];
    // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
    map1.forEach(elem=>{if(!map2.includes(elem)){map2.push(elem);}})
    return map2;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
   return arr.filter(item=>item.director==="Steven Spielberg"&&item.genre.includes('Drama')).length;

}




// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if(arr.length==0){return 0}
    return parseFloat((arr.reduce((acc,item)=>{return ((item.rate!=null)?item.rate:0)+acc;},0)/arr.length).toFixed(2));

}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
  
    let dramaArr=arr.filter(elem=>elem.genre.includes("Drama"));
    if(dramaArr.length==0){return 0}
    return parseFloat((dramaArr.reduce((acc,item)=>{return item.rate+acc;},0)/dramaArr.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    let clonedArray =  JSON.parse(JSON.stringify(arr))
    return clonedArray.sort((first, second) => {
        if (first.year>second.year) {
         return 1; 
       } else if (second.year>first.year) {
         return -1;
       } else {
           if(first.title>second.title){
               return 1;
            }else if(first.title<second.title){
                return -1;
            }else{return 0;}
       }
   })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    let newArr=arr.map(item=>item.title);
return newArr.sort((first,second)=>{
    if(first>second){
        return 1;
    }else if (first<second){
        return -1;
    }else{return 0;}
}).slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    let clonedArray =  JSON.parse(JSON.stringify(arr))

    return clonedArray.map(item=>{
        let hour =0;
        let minute=0;
        if(item.duration.indexOf("h")>=0){
            hour =parseFloat(item.duration.substring(0, item.duration.indexOf("h")));
        }
        if(item.duration.indexOf("m")>=0){
        minute=parseFloat(item.duration.substring(item.duration.indexOf(" "), item.duration.indexOf("m")));
        }
        item.duration=60*hour+minute;
        return item;
    });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr){
    if(arr.length==0){return null;}
    if(arr.length==1){return "The best year was "+ arr[0].year+ " with an average rate of "+arr[0].rate;;}
    let arrYearRate=arr.map(item=>{ 
        let movie=  {
           "year":0,
           "avg":0
        };
        movie.year=item.year;
        return movie;
    }).sort((item1,item2)=>{
        if(item1.year>item2.year){return 1;
        } else if(item1.year<item2.year){
                return -1;}
            else{return 0;}
    })
    let bestYear=0;
    let avarage=0;
    //console.log(arrYearRate)
    arrYearRate=arrYearRate.map(item=>{
        let myMovies=arr.filter(elem=>elem.year==item.year);
        let aaaaa=myMovies.reduce((acc,ite)=>{
        return acc+ite.rate;},0)
       let myAvarage=aaaaa/myMovies.length;
        if(avarage<myAvarage){
            avarage=myAvarage;
            bestYear=item.year;
        };  
    });
    return "The best year was "+ bestYear+" with an average rate of "+avarage;
}