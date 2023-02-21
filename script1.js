

// use the same rest countries name and print the all countries name,regions,sub-region,and populations.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
for(var i=0;i<result.length;i++){
    console.log(result[i].capital,result[i].region,result[i].subregion,result[i].population);
}
}