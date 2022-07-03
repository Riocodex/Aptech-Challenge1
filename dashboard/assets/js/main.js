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
let posts = document.getElementById('post');

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
        <td>Alpha group</td>
        <td>jonathan</td>
        <td>10</td>
        <td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
    </tr>
    <tr>
    <td>beta group</td>
    <td>Divine</td>
    <td>10</td>
    <td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>

<tr>
<td>Sigma group</td>
<td>Nonso</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>
<tr>
<td>Dega group</td>
<td>Martins</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr> <tr>
<td>omega group</td>
<td>helen</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>


</tbody>
</table>
`
let oldTable=`
<table id="tryingtable">
<thead>
    <tr>
        <td>Name</td>
        <td>Skill</td>
        <td>course</td>
        <td>Status</td>
    </tr>
</thead>

<tbody>
    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status important">Vice President</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status mediocre">member</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status absent">absent</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status amateur">member</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status important">President</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status mediocre">member</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status absent">absent</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status amateur">In Progress</span></td>
    </tr>
</tbody>
</table>
`
let form = `
  <h1>Form will be here</h1>
`
//pagination for messages
messages.addEventListener("click" , ()=>{
  // cardBox.style.display="none";
  //for the right div
  tryin.content="none";
  tryin.innerHTML=newTable;
  document.getElementById("recent").textContent="Recent Requests";

  document.querySelectorAll('.important').forEach(item =>{
    item.addEventListener('click' , ()=>{
        title=item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        alert(`Congrats!!!! you have been added to ${title}..please relogin`);
        location.href = "../../../loginandregister/index.html"; 
    })
  })

  document.querySelectorAll('.absent').forEach(item=>{
    item.addEventListener('click' , ()=>{
      title=item.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
      team=item.parentElement.parentElement
      alert(`Succesfully declined invitation from the ${title}`);
      team.style.display="none";
    })
  })

 
})
//pagination for dashboard
dashboard.addEventListener("click" , ()=>{
  tryin.content="none";
  tryin.innerHTML=oldTable;
  document.getElementById("recent").textContent="Recent Activity";
  
})
//pagination for post
post.addEventListener("click",()=>{
  tryin.content="none";
  tryin.innerHTML=form;
  document.getElementById("recent").textContent="Post a Challenge";
 
})


//function for user to sign out of the page
document.getElementById('signOut').addEventListener('click',()=>{
  location.href = "../../../loginandregister/index.html"; 
  alert('you have been signed out')
})



