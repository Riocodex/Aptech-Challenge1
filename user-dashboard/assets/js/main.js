// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
 
};
// pagination effect

let messages=document.getElementById("messages");
let dashboard = document.getElementById("dashboard");
let tryin=document.getElementById('tryingtable');
let cardBox = document.getElementById("cardBox");
let table = document.getElementById("table");

let newTable =`
<table class="goUp">
<thead>
    <tr>
        <td>Name of Team</td>
        <td>Leader</td>
        <td>Nos of Team</td>
        <!-- <td>Status</td> -->
    </tr>
</thead>

<tbody>
    <tr>
        <td>Sigma group</td>
        <td>bernard</td>
        <td>10</td>
        <td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
    </tr>
    <tr>
    <td>sonna  group</td>
    <td>helen</td>
    <td>10</td>
    <td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>
<tr>
<td>Omega group</td>
<td>jonathan</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>
<tr>
<td>Beta group</td>
<td>Divine Njoku wil</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>
<tr>
<td>Dega group</td>
<td>Martins</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr> <tr>
<td>Zeta group</td>
<td>Eze Donald</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>


</tbody>
</table>
`
messages.addEventListener("click" , ()=>{
  // cardBox.style.display="none";
  //for the right div
  tryin.content="none";
  tryin.innerHTML=newTable;


  document.getElementById("recent").textContent="Recent Requests";
  document.getElementById("noteamhead").style.display="none";
  document.getElementById("view-all").style.display="none";
  dashboard.style.display="inline-block";
  // messages.style.display="none";
  //function to alert something whenever the user picks or accepts a team
  document.querySelectorAll('.important').forEach(item =>{
    item.addEventListener('click' , ()=>{
        title=item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        alert(`Congrats!!!! you have been added to ${title}..please relogin`);
        location.href = "../../../loginandregister/index.html"; 
    })
  })
  //function to alert something when ever the user declines an invite from a team
  document.querySelectorAll('.absent').forEach(item=>{
    item.addEventListener('click' , ()=>{
      title=item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
      team=item.parentElement.parentElement
      alert(`Succesfully declined invitation from the ${title}`);
      team.style.display="none";
    })
  })


})
//function for users to signout of the page
document.getElementById('signOut').addEventListener('click',()=>{
    location.href = "../../../loginandregister/index.html"; 
    alert('you have been signed out')
})



