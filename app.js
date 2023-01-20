let textbox = document.getElementById("textbox")

var type = "";

var apikeys = ["eb44642aa4mshd1d155545aea5a4p110023jsne3281309d110","eb44642aa4mshd1d155545aea5a4p110023jsne3281309d110","eb44642aa4mshd1d155545aea5a4p110023jsne3281309d110"]

const apikey = apikeys[Math.floor(Math.random()*apikeys.length)]

var buttonClicked = false;

let loader = document.getElementById("loading")

document.getElementById("submit").addEventListener("click", () => {
        if (textbox.value != "") {
            if (textbox.value.length > 13){
              show()
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
                // console.log(data.message);
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
                
                            a.appendChild(btn);
                
                            a.download = data.media[i];
                
                            a.href = data.media[i];
                
                            a.target = "_blank"
                
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
                        a.href = data.media;
                        console.log(data.media)
                        a.download = data.media;
                        a.target = "_blank";
                        document.getElementById('body1').appendChild(br1);
                        document.getElementById('body1').appendChild(a);
                        document.getElementById('body1').appendChild(br);
                      }
            })
            } else {
              alert("Please Enter A valid URL")
            }
        } else {
            alert("please enter Instagram URL First")
        }
})

function show() {
  loader.style.visibility = "visible"
  loader.style.display = "block"
}
function hidee() {
  loader.style.visibility = "hidden"
  loader.style.display = "none"
}
