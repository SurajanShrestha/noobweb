var currentPageTitle=document.getElementsByTagName("title")[0].innerText;
var sidebarObj=document.getElementsByClassName("sidebar")[0];
var links=sidebarObj.children;
for(var i=0;i<sidebarObj.children.length;i++){
    if(links[i].innerText===currentPageTitle){
        links[i].className="active";
    }
}

