// go back home
const back = document.querySelector(".home");
back.addEventListener("click", ()=>{
    window.location.href = "../user_privilege/mainpage.html";
});



const table = document.querySelector(".orderHistoryTable");

  const storedOrderArray = JSON.parse(sessionStorage.getItem('orderArray'));

  if (storedOrderArray) {
    // Iterate through each item in storedOrderArray
    for (const orderDetails of storedOrderArray) {
      // Create a new table row for each item
      let tableRow = document.createElement("tr");
      tableRow.classList.add("item");

      // Create and populate cells for the current item
      let cell1 = document.createElement("td");
      let cell2 = document.createElement("td");
      let cell3 = document.createElement("td");

      // Create select element for status
      let statusSelect = document.createElement("select");
      statusSelect.name = "status";
      statusSelect.classList.add("status");

      // Add options to select element
      let option1 = document.createElement("option");
      option1.value = "Pending";
      option1.textContent = "Pending";

      let option2 = document.createElement("option");
      option2.value = "Received";
      option2.textContent = "Received";

      statusSelect.appendChild(option1);
      statusSelect.appendChild(option2);

      // Create button element for feedback
      let feedbackButton = document.createElement("button");
      feedbackButton.classList.add("add-feedback");
      feedbackButton.disabled = true;
      feedbackButton.textContent = "Add Feedback";

      // assigning the data
      let productName = orderDetails.itemName;
      let productQuan =  Number(orderDetails.itemQuan);
      let productPrice =  Number(orderDetails.itemPrice.replace(/[^\d.-]/g, '')) * productQuan ;


    //   convert back to ph peso
    productPrice = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(productPrice);


      cell1.innerHTML = productName;
      cell2.innerHTML = productQuan;
      cell3.innerHTML = productPrice;

      // Append cells to the current row
      tableRow.appendChild(cell1);
      tableRow.appendChild(cell2);
      tableRow.appendChild(cell3);

      // Append status and feedback elements to the current row
      let statusCell = document.createElement("td");
      statusCell.appendChild(statusSelect);

      let feedbackCell = document.createElement("td");
      feedbackCell.appendChild(feedbackButton);

      tableRow.appendChild(statusCell);
      tableRow.appendChild(feedbackCell);

      // Append the current row to the table
      table.appendChild(tableRow);
    }
  }





// add feedback disabled
const addFeedback = document.querySelectorAll(".add-feedback");
// pending or delivered
const deliveryStatus = document.querySelectorAll(".status");
deliveryStatus.forEach((stat, index) => {
    stat.addEventListener("change", () => {
        console.log("sdsdsfsf")
        deliveryStatus[index].disabled = true;
        addFeedback[index].disabled = false;
    });
});

 // Array to store feedback comments for each index
const feedbackContainer = document.querySelector(".container");
const review = document.querySelector(".review");
const postBtn = document.querySelector(".post-btn");
let currentButton;  // Variable to store the last clicked "addFeedback" button

addFeedback.forEach((btn) => {
    btn.addEventListener("click", () => {
        feedbackContainer.style.display = "block";
        currentButton = btn;  // Update the currentButton variable
    });
});

postBtn.addEventListener("click", () => {     
    feedbackContainer.style.display = "none";
    currentButton.textContent = review.value;
    currentButton.disabled = true;
    currentButton.style.color = "white";
});

// onsubmit ng review - para mareset and star
 function resetForm(event) {
    event.preventDefault(); // Prevents the form from actually submitting
    // Reset the rating
    document.querySelectorAll('input[name="rate"]').forEach(input => input.checked = false);

    // Reset the textarea
    document.querySelector('.review').value = '';
  }


//   wishlist clicked
const wishlistBtn = document.querySelector(".wishlist");
const orderHistoryBtn = document.querySelector(".order-history");
const orderHistoryContainer = document.querySelector(".order-history-items");
const historyLabel = document.querySelector(".history-label h2");
const historyLabelImage = document.querySelector(".history-label img");


wishlistBtn.addEventListener("click", ()=>{
  orderHistoryBtn.classList.remove("active");
  wishlistBtn.classList.add("active");
  orderHistoryContainer.classList.add("hide");
  historyLabel.textContent = "Wishlist";
  historyLabelImage.src = "img/wishlist.png";
});

//   order history clicked

orderHistoryBtn.addEventListener("click", ()=>{
  wishlistBtn.classList.remove("active");
  orderHistoryBtn.classList.add("active");
  orderHistoryContainer.classList.remove("hide");
  historyLabel.textContent = "Order History";
  historyLabelImage.src = "img/order-history.png";
});
