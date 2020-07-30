let balance = 0,
    Total = 0,
    appleQuantity = 0,
    orangeQuantity = 0,
    strawberryQuantity = 0,
    applePrice = 10,
    orangePrice = 15,
    strawberryPrice = 20,
    remainingBalance = balance;

function myBalance() {
  balance = document.getElementById("Balance").value;
  remainingBalance = balance;
  document.getElementById("remainingBalance").innerHTML = remainingBalance;
}
// using switch case to add an item of respective fruit
function add(item) {
  if (remainingBalance === 0) {
    alert("you are out of your Balance");
  } else {
    switch (item) {
      case "apple":
        // incrementing the  quantity of apple
        appleQuantity = appleQuantity + 1;
        document.getElementById("appleQuantity").innerHTML = appleQuantity;

        // total
        Total =appleQuantity * applePrice + orangeQuantity * orangePrice  + strawberryQuantity * strawberryPrice;
        document.getElementById("total").innerHTML = Total;

        //Remaing Balance
        remainingBalance = balance - Total;
        document.getElementById("remainingBalance").innerHTML = remainingBalance;

        break;
      case "orange":
        if (orangePrice > remainingBalance) {
          alert("you are out of your Balance");
        } else {
          // incrementing the  quantity of orange
          orangeQuantity = orangeQuantity + 1;
          document.getElementById("orangeQuantity").innerHTML = orangeQuantity;

          // total
          Total = appleQuantity * applePrice + orangeQuantity * orangePrice  + strawberryQuantity * strawberryPrice;
          document.getElementById("total").innerHTML = Total;

          //Remaing Balance
          remainingBalance = balance - Total;
          document.getElementById("remainingBalance").innerHTML = remainingBalance;
        }
        break;

        case "strawberry":
        if (strawberryPrice > remainingBalance) {
          alert("you are out of your Balance");
        } else {
          // incrementing the  quantity of straw
          strawberryQuantity = strawberryQuantity + 1;
          document.getElementById("strawberryQuantity").innerHTML = strawberryQuantity;

          // total
          Total = appleQuantity * applePrice + orangeQuantity * orangePrice + strawberryQuantity * strawberryPrice;
          document.getElementById("total").innerHTML = Total;

          //Remaing Balance
          remainingBalance = balance - Total;
          document.getElementById("remainingBalance").innerHTML = remainingBalance;
        }
        break;  
      default:
        break;
    }
  }
}
// using switch case to remove an item of respective fruit
function remove(item) {
  if (Total === 0) {
    alert("your  Bill is 0");
  } else {
    switch (item) {
      case "apple":
        // decrementing the  quantity of apple
        if (appleQuantity != 0) {
          appleQuantity = appleQuantity - 1;
          document.getElementById("appleQuantity").innerHTML = appleQuantity;

          // total
          Total = appleQuantity * applePrice + orangeQuantity * orangePrice  + strawberryQuantity * strawberryPrice;
          document.getElementById("total").innerHTML = Total;

          //Remaing Balance
          remainingBalance = balance - Total;
          document.getElementById("remainingBalance").innerHTML = remainingBalance;
        }
        break;
      case "orange":
        if (orangeQuantity != 0) {
          // decrementing the  quantity of orange by one
          orangeQuantity = orangeQuantity - 1;
          document.getElementById("orangeQuantity").innerHTML = orangeQuantity;

          // total
          Total = appleQuantity * applePrice + orangeQuantity * orangePrice  + strawberryQuantity * strawberryPrice;
          document.getElementById("total").innerHTML = Total;

          //Remaing Balance
          remainingBalance = balance - Total;
          document.getElementById( "remainingBalance").innerHTML = remainingBalance;
        }
        break;
     case "strawberry":
        if (strawberryQuantity != 0) {
          // decrementing the  quantity of strawberry by one
          strawberryQuantity = strawberryQuantity - 1;
          document.getElementById("strawberryQuantity").innerHTML = strawberryQuantity;

          // total
          Total = appleQuantity * applePrice + orangeQuantity * orangePrice  + strawberryQuantity * strawberryPrice;
          document.getElementById("total").innerHTML = Total;

          //Remaing Balance
          remainingBalance = balance - Total;
          document.getElementById( "remainingBalance").innerHTML = remainingBalance;
        }
        break;   
      default:
        break;
    }
  }
}