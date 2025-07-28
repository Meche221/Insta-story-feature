var arr = [
  {dp:"https://plus.unsplash.com/premium_photo-1664474898608-7537d5780e17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D", story:"https://plus.unsplash.com/premium_photo-1682095649467-808acb4e19cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"},

  {dp:"https://plus.unsplash.com/premium_photo-1682095691746-e6a0ca81349c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D", story:"https://plus.unsplash.com/premium_photo-1682095763838-0ca2593193bd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"},

  {dp:"https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"},

  {dp:"https://images.unsplash.com/photo-1596818478861-7d2ae387ca89?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1580656169983-bef557382466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"},  
];

var storiyan = document.querySelector("#storiyan");


var clutter = ""
arr.forEach(function(elem,idx){
  clutter += `<div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
      </div>`
})

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
document.querySelector("#fullscreen").style.display = "block"
document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

  setTimeout(function(){
    document.querySelector("#fullscreen").style.display = "none"
  },2000)
});
