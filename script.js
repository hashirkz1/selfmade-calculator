let press0 = () =>{
    data.insertAdjacentText("beforeend",0)
}
let press1 = () =>{
    data.append("1")
}
let press2 = () =>{
    data.append("2")
}
let press3 = () =>{
    data.append("3")
}
let press4 = () =>{
    data.append("4")
}
let press5 = () =>{
    data.append("5")
}
let press6 = () =>{
    data.append("6")
}
let press7 = () =>{
    data.append("7")
}
let press8 = () =>{
    data.append("8")
}
let press9 = () =>{
    data.append("9")
}
let press_point = () =>{
    data.append(".")
}
let press_plus = () =>{
    data.append("+")
    operator = "+"
}
let press_minus = () =>{
    data.append("-")
    operator = "-"
}
let press_multiply = () =>{
    data.append("*")
    operator = "*"
}
let press_divide = () =>{
    data.append("/")
    operator = "/"
}
let press_remainder = () =>{
    data.append("%")
    operator = "%"
}
let clear_display = () =>{
    data.innerHTML = ""
}

let delete_data = () =>{
    let index = (data.innerHTML.length) - 1
    for(i=0;i<index;i++){
        arr.push(data.innerHTML[i])
    }
    data.innerHTML = ""
    console.log(data.innerHTML)
    arr.filter((a)=>{
        data.append(a)
    })
    arr = []
}

let operate = () =>{
    let num = data.innerHTML
    let num_list = num.split(operator)
    num_list[0] = Number.parseInt(num_list[0])
    num_list[1] = Number.parseInt(num_list[1])
    if(operator == "+"){
        result = num_list[0] + num_list[1]
        data.innerHTML = result
    }
    else if(operator == "-"){
        result = num_list[0] - num_list[1]
        data.innerHTML = result
    }
    else if(operator == "*"){
        result = num_list[0] * num_list[1]
        data.innerHTML = result
    }
    else if(operator == "/"){
        result = num_list[0] / num_list[1]
        data.innerHTML = result
    }
    else if(operator == "%"){
        result = num_list[0] % num_list[1]
        data.innerHTML = result
    }
    else{
        data.innerHTML = "Error"
    }

    
    
}
let arr =[];
let operator;
let  data = document.getElementsByClassName("data")[0]
let one = document.getElementById("one")
one.addEventListener("click",press1)
let two = document.getElementById("two")
two.addEventListener("click",press2)
let three = document.getElementById("three")
three.addEventListener("click",press3)
let four = document.getElementById("four")
four.addEventListener("click",press4)
let five = document.getElementById("five")
five.addEventListener("click",press5)
let six = document.getElementById("six")
six.addEventListener("click",press6)
let seven = document.getElementById("seven")
seven.addEventListener("click",press7)
let eight = document.getElementById("eight")
eight.addEventListener("click",press8)
let nine = document.getElementById("nine")
nine.addEventListener("click",press9)
let zero = document.getElementById("zero")
zero.addEventListener("click",press0)
let point = document.getElementById("point")
point.addEventListener("click",press_point)
let plus = document.getElementById("plus")
plus.addEventListener("click",press_plus)
let minus = document.getElementById("minus")
minus.addEventListener("click",press_minus)
let multiply = document.getElementById("multiply")
multiply.addEventListener("click",press_multiply)
let divide = document.getElementById("division")
divide.addEventListener("click",press_divide)
let remainder = document.getElementById("remainder")
remainder.addEventListener("click",press_remainder)
let redo_num = document.getElementById("DEL")
redo_num.addEventListener("click",delete_data)
let all_clear = document.getElementById("AC")
all_clear.addEventListener("click",clear_display)
let equal = document.getElementById("equal")
equal.addEventListener("click",operate)