function bgChange(){
    let checkbox = document.getElementById("checkbox");
    if(checkbox.checked == true){
        document.getElementById("body").style.backgroundColor="black"
        document.getElementById("darkmode").style.color="white"
    }
    else{
        document.getElementById("body").style.backgroundColor = "white"
        document.getElementById("darkmode").style.color="black"
    }
  }

    let outputScreen = document.getElementById("output-screen");
    let button = document.querySelectorAll("button");

    function display(num) {
        outputScreen.value += num;

    }

    function calculate() {
        if (outputScreen.value) {
            outputScreen.value = eval(outputScreen.value);
        }
        else {
            alert("invalid")
        }
    }

    function allClear() {
        outputScreen.value = "";
    }

    function del() {
        outputScreen.value = outputScreen.value.slice(0, -1)
    }