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
    <td id="makeTeamLeader"><span id="absent" class="status amateur hoversir">Make team leader?</span></td>
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
                                <td>Course</td>
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
`
let makeTeamTable=`
<thead>

<tr>
    <td>Name</td>
    <td>Skill</td>
    <td>Course</td>
    <td>Team</td>
</tr>
</thead>

<tbody>
<input id="nameOfTeam" type="text" placeholder="Name of team">
<tr>

    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>joseph obiora</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>Peter parker</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>OG OG</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>Jacob the hero</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>Emezina mpotu</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>logic gates</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>spectacular spiderman</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>
<tr>
    <td>Onwuka Rosario</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>joseph obiora</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>Peter parker</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>OG OG</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>Jacob the hero</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>

<tr>
    <td>Emezina mpotu</td>
    <td>Web dev</td>
    <td>ADSE</td>
    <td><span class="status important hoversir ask">add to team ?</span></td>
</tr>


</tbody>
</table>
`

let messagesTable=`
<div class="chat-container">
<div class="msg-header">
    <div class="msg-header-img">
        <img src="assets/imgs/hacker.jpg" alt="">
    </div>
    <div class="active">
        <h4>John lewis</h4>
        <!-- <h6>3 hours ago ...</h6> -->
    </div>
    <div class="header-icons">
        <i class="fa fa-phone"></i>
        <i class="fa fa-video-camera"></i>
        <i class="fa fa-info-circle" aria-hidden="true"></i>
    </div>
</div>
<div class="chat-page">
    <div class="msg-inbox">
        <div class="chats">
            <div class="msg-page">

                <div class="received-chats">
                    <div class="received-chats-img">
                        <img src="assets/imgs/goku.jpg" alt="">
                    </div>
                    <div class="received-msg">
                        <div class="received-msg-inbox">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quas enim neque molestias tenetur voluptates error eius maiores id deserunt quod velit tempora distinctio dignissimos, modi perspiciatis officiis iste sapiente?</p>
                            <span class="time">11.01 AM | JULY 8</span>
                        </div>
                    </div>
                </div>


                <div class="outgoing-chats">     
                    <div class="outgoing-chats-msg">                           
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quas enim neque molestias tenetur voluptates error eius maiores id deserunt quod velit tempora distinctio dignissimos, modi perspiciatis officiis iste sapiente?</p>
                            <span class="time">11.01 AM | JULY 8</span>
                        </div>
                    <div class="outgoing-chats-img">
                        <img src="assets/imgs/skull.jpg" alt="">
                    </div>
                </div>

                <div class="received-chats">
                    <div class="received-chats-img">
                        <img src="assets/imgs/goku.jpg" alt="">
                    </div>
                    <div class="received-msg">
                        <div class="received-msg-inbox">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quas enim neque molestias tenetur voluptates error eius maiores id deserunt quod velit tempora distinctio dignissimos, modi perspiciatis officiis iste sapiente?</p>
                            <span class="time">11.01 AM | JULY 8</span>
                        </div>
                    </div>
                </div>


                <div class="outgoing-chats">     
                    <div class="outgoing-chats-msg">                           
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quas enim neque molestias tenetur voluptates error eius maiores id deserunt quod velit tempora distinctio dignissimos, modi perspiciatis officiis iste sapiente?</p>
                            <span class="time">11.01 AM | JULY 8</span>
                        
                    </div>
                    <div class="outgoing-chats-img">
                        <img src="imgs/skull.jpg" alt="">
                    </div>
                </div>

                <div class="received-chats">
                    <div class="received-chats-img">
                        <img src="imgs/goku.jpg" alt="">
                    </div>
                    <div class="received-msg">
                        <div class="received-msg-inbox">
                            <p>bruhhh you are KAMIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                            <span class="time">11.01 AM | JULY 8</span>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>

<div class="somethin">
    <div class="msg-bottom">
        <div class="bottom-icons">
            <i class="fa fa-plus-circle"></i>
            <i class="fa fa-camera"></i>
            <i class="fa fa-microphone"></i>
            <i class="fa fa-smile-o"></i>
        </div>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="write message....">
            <div class="input-group-append">
                <span class="input-group-text">
                    <i class="fa fa-paper-plane"></i>
                </span>
            </div>
        </div>
    </div>
</div>

</div>
</div> 
`
//pagination for messages
messages.addEventListener("click" , ()=>{
  // cardBox.style.display="none";
  //for the right div
  tryin.content="none";
  tryin.innerHTML=messagesTable;


  document.getElementById("recent").textContent="Recent Chats";
 
  
  // messages.style.display="none";
})
//pagination for dashboard
dashboard.addEventListener("click" , ()=>{
  tryin.content="none";
  tryin.innerHTML=oldTable;
  document.getElementById("recent").textContent="Users";
  let makeTeam = document.querySelector("#makeTeamLeader");
  makeTeam.addEventListener("click",()=>{
      tryin.content="none";
      tryin.innerHTML=makeTeamTable;
      document.getElementById("recent").textContent="Make New Team";
  
      //function to alert if the team leader adds a user
      document.querySelectorAll('.ask').forEach(item => {
          item.addEventListener('click', event => {
              alert("User Added");
          });
        })      
  })
  
})

//function to add to team after hitting the absent button
let add = document.getElementById('absent');
add.addEventListener("click",()=>{
  document.getElementsByClassName("addtoteam").style.display="inline-block"
})

//function to change the table or display board to any team the admin clicks
let teams = document.querySelectorAll('.team');
let title = omegateam.textContent;
teams.forEach(item => {
    item.addEventListener('click', event => {
        tryin.content="none";
        tryin.innerHTML=usersTable;
        document.getElementById("recent").textContent=`${item.textContent}`;
    })
  })

let testing = document.querySelector(".team");
console.log(testing);


//function to make a new team leader
let makeTeam = document.querySelector("#makeTeamLeader");
makeTeam.addEventListener("click",()=>{
    tryin.content="none";
    tryin.innerHTML=makeTeamTable;
    document.getElementById("recent").textContent="Make New Team";

    //function to alert if the team leader adds a user
    document.querySelectorAll('.ask').forEach(item => {
        item.addEventListener('click', event => {
            alert("User Added");
        });
      })      
})




//function to say alert when admin declares winner and disqualifies
let winningTeam = document.querySelectorAll('.winner');
winningTeam.forEach(item=>{
    item.addEventListener('click' , event=>{
        let text = item.parentElement.previousElementSibling.textContent;
        alert(`${text} are the Winners🤑🤑🤑🤑🤑!!!!`);
        
    })
})

//function to alert disqualification
let disqualified = document.querySelectorAll('.disqualify');
disqualified.forEach(item=>{
    item.addEventListener('click' , event=>{
        let text = item.parentElement.previousElementSibling.textContent;
        let team = item.parentElement.previousElementSibling.parentElement
        team.style.display="none";
        alert(`${text} has been disqualified!!!☠☠☠☠☠`);
    })
})


//function to make the admin sign out
document.getElementById('signOut').addEventListener('click',()=>{
    location.href = "../../../loginandregister/index.html"; 
    alert('you have been signed out')
})



