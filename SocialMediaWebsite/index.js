
const btnSearch = document.querySelector('button');
btnSearch.addEventListener('click', (e)=>{
    e.preventDefault();
    fetch('http://jsonplaceholder.typicode.com/posts').then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data[0].title);
        let tableData="";
        data.map((values)=>{
            tableData+=
            
            `<div class=feed>
            <div class="head">
                <div class="user" id=row">
                
                    <div class="profile-photo">
                        <img src="images/profile-17.jpg">
                    </div>
                    <div class="ingo">
                        <h3>${values.title}</h3>
                        <div class="text-muted">${values.userId}</div>
                        <small class="feed-body">Dubai, 15 MINUTES AGO</small>
                        <b>${values.id}</b>
                    </div>
                </div>
                <span class="edit">
                    <i class="uil uil-trash-alt"></i>
                </span>
            </div>
            <div class="photo">
                <img src="images/feed-4.jpg">
            </div>
            <div class="action-button">
                <div class="interaction-button">
                    <span><i class="uil uil-heart"></i></span>
                    <span><i class="uil uil-comment-dots"></i></span>
                    <span><i class="uil uil-share-alt"></i></span>
                </div>
                <div class="bookmark">
                    <span><i class="uil uil-bookmark-full"></i></span> 
                </div>
            </div>
            <div class="liked-by">
                <span><img src="images/profile-10.jpg"></span>
                <span><img src="images/profile-11.jpg"></span>
                <span><img src="images/profile-12.jpg"></span>
                <p class="feed-body">Liked by <b>Chace Crawford</b> and <b>2,323 others</b></p>
            </div>
            <div class="caption">
                <b>${values.title}</b><p class="feed-body">${values.body}</p>
            </div>
            <div class="comments text-muted feed-body">
                View all 277 comments
            </div>
        </div>
        </div>`;
        });
        document.getElementById("title").innerHTML=tableData;
    })
        
})

var form=document.getElementById("form")

form.addEventListener('submit',function(e){
    e.preventDefault()
    var body= document.getElementById("post-body").value
    fetch('http://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title:"Kashish Gandhi",
            body:body,
            userId:"kashish_p_gandhi",
            id:"101"
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        var results=document.getElementById("results")
        results.innerHTML=`<div class="head">
        <div class="user">
        
            <div class="profile-photo">
                <img src="images/profile-1.jpg">
            </div>
            <div class="ingo">
                <h3>${data.title}</h3>
                <div class="text-muted">${data.userId}</div>
                <small class="feed-body">Dubai, 15 MINUTES AGO</small>
                <b>${data.id}</b>
            </div>
        </div>
        <span class="edit">
            <i class="uil uil-trash-alt"></i>
        </span>
    </div>
    <div class="photo">
        <img src="images/feed-1.jpg">
    </div>
    <div class="action-button">
        <div class="interaction-button">
            <span><i class="uil uil-heart"></i></span>
            <span><i class="uil uil-comment-dots"></i></span>
            <span><i class="uil uil-share-alt"></i></span>
        </div>
        <div class="bookmark">
            <span><i class="uil uil-bookmark-full"></i></span> 
        </div>
    </div>
    <div class="liked-by">
        <span><img src="images/profile-10.jpg"></span>
        <span><img src="images/profile-11.jpg"></span>
        <span><img src="images/profile-12.jpg"></span>
        <p class="feed-body">Liked by <b>Chace Crawford</b> and <b>2,323 others</b></p>
    </div>
    <div class="caption">
        <b>${data.title}</b><p class="feed-body">${data.body}</p>
    </div>
    <div class="comments text-muted feed-body">
        View all 277 comments
    </div>
</div>`;
    })
})



