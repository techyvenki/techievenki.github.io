let codes = document.querySelectorAll('.highlight > pre > code');
let countID = 0;
codes.forEach((code) => {

  code.setAttribute("id", "code" + countID);
  
  let btn = document.createElement('button');
  btn.innerHTML = "<img src='https://aman.ai/images/copy.png' style='margin:0; border:none; padding:2px 0px; width:100%; height:18px; width:18px;'>";
  btn.className = "btn-copy";
  btn.setAttribute("data-clipboard-action", "copy");
  btn.setAttribute("data-clipboard-target", "#code" + countID);
  
  let div = document.createElement('div');
  div.appendChild(btn);
  
  code.before(div);

  countID++;
  
  btn.addEventListener('click', () => {
    btn.innerHTML = "<img src='https://aman.ai/images/check.png' style='margin:0; border:none; padding:2px 0px; width:100%; height:18px; width:18px;'>";

    setTimeout(() => {
      btn.innerHTML = "<img src='https://aman.ai/images/copy.png' style='margin:0; border:none; padding:2px 0px; width:100%; height:18px; width:18px;'>";
    }, 2000);
  });  
}); 

let clipboard = new ClipboardJS('.btn-copy');
