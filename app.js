let textbox = document.getElementById("textbox")

var expression = /^((https|http)?:\/\/(?:www\.)?instagram\.com(\/[A-Za-z0-9_@./#&+-]*)?\/(p|tv|reel|stories)\/([^/?#&]+)).*/;
var regex = new RegExp(expression);

var type = "";

var apikeys = ["eb44642aa4mshd1d155545aea5a4p110023jsne3281309d110","8f75f31ab0mshf76134b564a64a5p1deb25jsncec38b493eca","5fa378d3f1msh7288421b1108f32p1795e5jsnba3b200acf7b"]

const apikey = apikeys[Math.floor(Math.random()*apikeys.length)]

var buttonClicked = false;

let loader = document.getElementById("loading")

let submit = document.getElementById("submit")

document.getElementById("submit").addEventListener("click", () => {
        if (textbox.value != "") {
            if (textbox.value.length > 13 ){
              show();
              
              if (textbox.value.match(regex)) {
                const options = {
                  method: 'GET',
                  headers: {
                      'X-RapidAPI-Key': apikey,
                      'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
                  }
                };
                var url = 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index?url='+textbox.value;
                
                fetch(url, options)
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  console.log(data)
                  hidee();
                  type = data.Type;
                  
                  switch (type) {
                      case "Post-Video":
                        type = "mp4";
                        break;
                      case "Story-Video":
                          type = "mp4";
                        break;
                      case "Post-Image":
                          type = "jpg";
                        break;
                      case "Story-Image":
                          type = "jpg";
                        break;
                    }
                    
                    textbox.value = "";
                    
                    const result = Array.isArray(data.media)
  
                    if (buttonClicked = true ) {
                          buttonClicked = false;
                          const list = document.getElementById("body1");
                          var delChild = list.firstElementChild
                          while (delChild) {
                          list.removeChild(delChild);
                          delChild = list.firstElementChild;
                        }
                    }
                      if(result) {
                          for(var i=0;i<data.media.length;i++){
                              var br = document.createElement('br')
                              var hr = document.createElement('hr')
                              var a = document.createElement('a');
                              let br1 = document.createElement('br')
                  
                              var btn = document.createElement('button');
                  
                              btn.innerHTML = `Download ${i+1}`;
                              btn.id = "downloadbtn";
                              a.appendChild(btn);

                              a.download = data.media[i]+"&dl=1";
                  
                              a.href = data.media[i]+"&dl=1";
                  
                              document.getElementById('body1').appendChild(br);
                              document.getElementById('body1').appendChild(a);
                              document.getElementById('body1').appendChild(br1)
                              document.getElementById('body1').appendChild(hr)
                          }
                        } else {
                          let br = document.createElement('br')
                          let br1 = document.createElement('br')
                          var a = document.createElement('a');
                          var btn = document.createElement('button');

                          btn.innerHTML = "Download";
                          a.appendChild(btn);

                          a.download = data.media+"&dl=1";
                          
                          a.href = data.media+"&dl=1";

                          document.getElementById('body1').appendChild(br1);
                          document.getElementById('body1').appendChild(a);
                          document.getElementById('body1').appendChild(br);
                        } 
                  }) 
                } else {
                  hidee();
                  
                  alert("Please Enter A valid INSTAGRAM URL")
              }

            } else {
              alert("Please Enter A valid URL")
            }
        } else {
            alert("please enter Instagram URL First")
        }
})

function show() {
  submit.disabled = true;
  loader.style.visibility = "visible"
  loader.style.display = "block"
}
function hidee() {
  loader.style.visibility = "hidden"
  loader.style.display = "none"
  submit.disabled = false;
}

if(top!=self){ top.location.replace(document.location); alert("SMTECHYT NOT ALLOWED MAKE FRAMIMG ,[Framing is Not Allowed ],Click OK to Open Original Link")}


if (localStorage.getItem("visited") === null) { 
    document.getElementById("container").style.display = "block";
    localStorage.setItem("visited", true);
  }else {
    document.getElementById("container").style.display = "none"; 
}


document.getElementById("close").addEventListener("click", function() {
  document.getElementById("container").style.display = "none";
});

document.getElementById("accept").addEventListener("click", function() {
  window.open("https://www.instagram.com/subhashis_op/")
});
