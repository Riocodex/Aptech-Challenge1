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
    <td>Alpha group</td>
    <td>jonathan</td>
    <td>10</td>
    <td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>
<tr>
<td>Alpha group</td>
<td>jonathan</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>
<tr>
<td>Alpha group</td>
<td>jonathan</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>
<tr>
<td>Alpha group</td>
<td>jonathan</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr> <tr>
<td>Alpha group</td>
<td>jonathan</td>
<td>10</td>
<td><span class="status important hoversir">Accept</span> <span class="status absent hoversir">Decline</span></td>
</tr>


</tbody>
</table>
`
let oldTable=`
<thead>
<tr>
    <td>Name</td>
    <td>Skill</td>
    <td>Course</td>
    <td>Team</td>
</tr>
</thead>

<tbody>
<tr>
    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span >OMEGA</span></td>
</tr>

<tr>
    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span >BETA</span></td>
</tr>

<tr>
    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span  id="absent" class="status absent hoversir">no team yet</span></td>
</tr>

<tr>
    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span>SIGMA</span></td>
</tr>

<tr>
    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span>SIGMA</span></td>
</tr>

<tr>
    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span>SIGMA</span></td>
</tr>

<tr>
    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span>SIGMA</span></td>
</tr>

<tr>
    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span>SIGMA</span></td>
</tr>
</tbody>
</table>
`
let usersTable = `
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
        <td><span class="status amateur hoversir">make team leader?</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status amateur hoversir">make team leader?</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status amateur hoversir">make team leader?</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status amateur hoversir">make team leader?</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status important hoversir">President</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status amateur hoversir">make team leader?</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status amateur hoversir">make team leader?</span></td>
    </tr>

    <tr>
        <td>Onwuka Rosario</td>
        <td>Web dev</td>
        <td>ADSE</td>
        <td><span class="status amateur hoversir">make team leader?</span></td>
    </tr>
</tbody>                                
</table>
`
//pagination for messages
messages.addEventListener("click" , ()=>{
  // cardBox.style.display="none";
  //for the right div
  tryin.content="none";
  tryin.innerHTML=newTable;


  document.getElementById("recent").textContent="Recent Requests";
 
  
  // messages.style.display="none";
})
//pagination for dashboard
dashboard.addEventListener("click" , ()=>{
  tryin.content="none";
  tryin.innerHTML=oldTable;
  document.getElementById("recent").textContent="Users";
  
})

//function to add to team after hitting the absent button
let add = document.getElementById('absent');
add.addEventListener("click",()=>{
  document.getElementsByClassName("addtoteam").style.display="inline-block"
})

//function to change the table or display board to any team the admin clicks
let omegateam = document.querySelector('#omegateam');
let title = omegateam.textContent;
omegateam.addEventListener("click",()=>{
  tryin.content="none";
  tryin.innerHTML=usersTable;
  document.getElementById("recent").textContent=`${title}`;
})

let testing = document.querySelector(".team");
console.log(testing);





