// alert('connected');
let count = 0;
document.getElementById("submitBtn").addEventListener("click", function () {
  // alert('button clicked');
  const textArea = document.getElementById("textArea");
  const textAreaValue = textArea.value;
 

//   console.log(textAreaValue);
//   const tableContainer = document.getElementById("tableContainer");
//   const tr = document.createElement("tr");
//   tr.innerHTML = `<td>${(count += 1)}</td>
//    <td>${textAreaValue}</td>
//    <td>
//       <button class="done-btn btn btn-success btn-xs text-white">Done</button>
//       <button class="delete-btn btn btn-error btn-xs text-white">Delete</button>
//   </td>`;


//   tableContainer.appendChild(tr);
//   textArea.value = "";

  
  if(textAreaValue != '' && textAreaValue !=' ' && textAreaValue != '  '){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${(count += 1)}</td>
     <td>${textAreaValue}</td>
     <td>
        <button class="done-btn btn btn-success btn-xs text-white">Done</button>
        <button class="delete-btn btn btn-error btn-xs text-white">Delete</button>
    </td>`;
    textArea.value = "";
  
    tableContainer.appendChild(tr);
  }
  else{
    alert("Invalid Input");
  }
  const doneBtns = document.querySelectorAll(".done-btn ");
// console.log(doneBtns);
for (let btn of doneBtns) {
  btn.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.style.textDecoration = "line-through";
    // console.log(e.target.parentElement.parentElement) 
    // alert('done');
  });
}
const deleteBtns = document.querySelectorAll(".delete-btn ");
// console.log(deleteBtns);
for (let btn of deleteBtns) {
  btn.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.style.display = "none";
    // console.log(e.target.parentElement.parentElement) 
    // alert('done');
  });
}
document.getElementById('clearBtn').addEventListener('click',function(e){
    const tableContainer = document.getElementById('tableContainer');
    // tableContainer.style.display = 'none';
    tableContainer.innerHTML = '';
    count = 0
    // alert('clear');
});

});


