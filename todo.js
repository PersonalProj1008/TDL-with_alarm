let b="uniquecom_";
let count=0;
let svgiconp1=`<!--?xml version="1.0" encoding="iso-8859-1"?--> <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1"`
let svgiconp2=`xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width:100%;height:100%;enable-background:new 0 0 512 512;" xml:space="preserve"> <rect x="114.402" y="220.724" style="fill:#CFF09E;" width="274.813" height="276.96"></rect> <g> <path style="fill:#507C5C;" d="M182.746,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313 c7.905,0,14.313,6.409,14.313,14.313v91.604C197.06,415.895,190.652,422.305,182.746,422.305z"></path> <path style="fill:#507C5C;" d="M251.808,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313 c7.905,0,14.313,6.409,14.313,14.313v91.604C266.121,415.895,259.713,422.305,251.808,422.305z"></path> <path style="fill:#507C5C;" d="M320.869,422.305c-7.905,0-14.313-6.409-14.313-14.313v-91.604c0-7.904,6.408-14.313,14.313-14.313 c7.905,0,14.313,6.409,14.313,14.313v91.604C335.182,415.895,328.774,422.305,320.869,422.305z"></path> <path style="fill:#507C5C;" d="M434.571,135.961c-8.435-13.251-21.524-22.423-36.856-25.828 c-7.712-1.722-15.362,3.152-17.076,10.869c-1.713,7.718,3.153,15.361,10.869,17.076c7.869,1.749,14.585,6.455,18.913,13.255 c4.328,6.8,5.75,14.879,4.002,22.748l-7.423,33.418L99.603,139.224l7.423-33.42c3.608-16.243,19.754-26.519,36.002-22.917 l145.2,32.249c7.713,1.713,15.361-3.153,17.076-10.869c1.713-7.718-3.153-15.361-10.869-17.076l-82.44-18.309l8.327-37.493 l122.96,27.308l-11.431,51.467c-1.713,7.718,3.153,15.361,10.869,17.076c1.045,0.232,2.088,0.344,3.116,0.344 c6.563,0,12.478-4.542,13.96-11.213l14.534-65.44c0.823-3.706,0.14-7.587-1.898-10.789c-2.038-3.202-5.266-5.463-8.972-6.286 L212.555,0.342c-7.713-1.709-15.362,3.152-17.076,10.869l-11.43,51.466l-34.815-7.732C117.579,47.909,86.11,67.948,79.079,99.6 l-10.526,47.391c-1.713,7.718,3.153,15.361,10.869,17.076l190.666,42.347H114.402c-7.905,0-14.313,6.409-14.313,14.313v276.96 c0,7.904,6.408,14.313,14.313,14.313h274.81c7.905,0,14.313-6.409,14.313-14.313V236.049l11.243,2.498 c1.026,0.229,2.067,0.341,3.103,0.341c2.701,0,5.37-0.764,7.686-2.239c3.202-2.038,5.463-5.266,6.288-8.972l10.526-47.391 C445.776,164.954,443.006,149.212,434.571,135.961z M374.9,483.374H128.716V235.04H374.9V483.374z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> `
let svgmp="";
let ct_rec="";
let total_alm=[];
let noalm=0;
let alm_mp3=new Audio("mixkit-scanning-sci-fi-alarm-905.wav");
let univt ;
setInterval(myTimer1, 100);


function create_TODO(){
univt=setInterval(myTimer, 1000);
count=count+1;
noalm+=1;
a=b+count;
let at_rec=document.getElementById("hour_slc").value+":"+document.getElementById("min_slc").value+" "+document.getElementById("ampm").value;
total_alm.push(at_rec+" "+a);
let add_note=document.getElementById("add_note").value;
let node = document.createElement("div");
let s2node = document.createElement("div");
let s1node = document.createElement("div");
s1node.style="display:flex;flex-direction:row;justify-content:center;align-items:center;font-family: Arial, Helvetica, sans-serif;background-color: white; font-size:xx-large; height: 100%; aspect-ratio: 1 / 1; width: 100%; border: 1px solid rgb(0, 0, 0);"
s1node.innerHTML=add_note;
s2node.style="box-shadow: inset 3px -4px 28px -5px rgba(0,0,0,0.8);background-color: green;height: 100%;border-bottom-left-radius:10px;border-top-left-radius:10px;border: 0px solid black;display: flex;justify-content: center;align-items: center;flex-direction: column;aspect-ratio: 1 / 1;"
svgmp=` id="`+a+`_svgicon"`;
let svgicon=svgiconp1+svgmp+svgiconp2+``;
s2node.innerHTML=svgicon;
s2node.id=a+"_s2node";
// +`onmousemove=changeColor('`+a+`_s2node') onmouseout=changeColor('`+a+`_s2node') `;
s2node.setAttribute("onmouseover","changeColor('"+a+"_s2node')");
s2node.setAttribute("onmouseout","changeColor('"+a+"_s2node')");
s2node.setAttribute("onclick","deltd('"+a+"')");
node.id=a;
node.appendChild(s2node);
node.appendChild(s1node);
node.style="box-shadow: -3px 3px 11px -3px rgba(0,0,0,1);border-bottom-left-radius:10px;border-top-left-radius:10px;background-color: rgb(199, 171, 19,0);margin-top:4%; margin-left:4%; height: 10%; width: 90%; border: 1px solid black; display: flex; justify-content: center; align-items: center; flex-direction: row;border:0px solid white"
let addto=document.getElementById("list_content");
addto.appendChild(node);
}
function onlf(){
for(i=0;i<7;i++){
    create_TODO();
}
}
function deltd(someid){
    clearInterval(univt);
    let index=parseInt(someid.split("_")[1]);
    total_alm[index-1]=null;
    console.log(total_alm);
    document.getElementById(someid).style.display="none";
    
}
function changeColor(idname){
    // idname=idname.split("_")[0];
    let checka=document.getElementById(idname);
    if(checka.style.backgroundColor=="green"){
        checka.style.backgroundColor="red";
    }
    else{
        checka.style.backgroundColor="green";
    }
}
function changeColor1(idname1){
    // idname=idname.split("_")[0];
    let checka=document.getElementById(idname1);
    if(checka.style.backgroundColor=="green"){
        checka.style.backgroundColor="blue";
    }
    else if(checka.style.backgroundColor=="blue"){
        checka.style.backgroundColor="green";
    }
}
function myTimer1() {
    const date = new Date();
    let countx=-1;
    let ct_rec=date.toLocaleTimeString();
    document.getElementById("curr_time").innerHTML = date.toLocaleTimeString();
  
}  

function myTimer() {
  let date = new Date();
  ct_rec=date.toLocaleTimeString();
  if(total_alm.length>0){
  for (let k of total_alm){ 
    if(k==null){
        continue;
    } 
  checktime(ct_rec,k);
  }
}
}

function checktime(snum,atnum){
    let snumpa=snum.split(" ");
    let atnumpa=atnum.split(" ");
    let chkn=atnumpa[2];
    if(snumpa[1]==atnumpa[1]){
        snum=snumpa[0].split(":");
        atnum=atnumpa[0].split(":");
        if(parseInt(atnum[0])==parseInt(snum[0])){
            if(parseInt(atnum[1])==parseInt(snum[1])){
                let nodec=document.getElementById(chkn);
                if(document.getElementById("list_content").hasChildNodes(nodec)){
                    //changeColor1(chkn+"s2node");
                    alm_mp3.play();
                }
            }
        }
    }
    
}