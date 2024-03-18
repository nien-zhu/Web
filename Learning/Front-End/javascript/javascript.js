function getData(){
    return new Promise(function(resolve, reject){
        let req=new XMLHttpRequest();
        req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");
        req.onload=function(){
            resolve(this.responseText);
        };
        req.onerror=function(){
            reject("error");
        };
        req.send();
    });
}

let promise = getData();
promise.then(function(result){
    alert(result);
}, function(error){
    alert(error)
});

/*-------------------------------------------------*/

// function getData(callback){
//     let req=new XMLHttpRequest();
//     req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");
//     req.onload=function(){
//         callback(this.responseText);
//     }
//     req.send();
// }

// function showData(result){
//     alert(result)
// }

// getData(showData);


// alert("立刻被呼叫")

/*-------------------------------------------------*/

// class Car{
//     constructor(color){
//         this.speed=0;
//         this.color=color;
//     }

//     static showfunction(){
//         console.log("this class support run() stop()")
//     }

//     run(speed){
//         this.speed=speed;
//         console.log(this.color+" Car "+"Running at "+this.speed);
//     }

//     stop(){
//         this.speed=0;
//         console.log(this.color+" Car Stopped");
//     }
// }

// class ElectricCar extends Car{
//     constructor(color){
//         super(color);
//         this.battery=100;
//     }


// }

// let car=new Car("green");
// Car.showfunction();
// car.run(90)
// car.stop()
// let elecar = new ElectricCar("yellow");
// elecar.name = "BMW"

// console.log(elecar.color);
// elecar.run(50)

// console.log(elecar.name)