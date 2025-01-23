let n = null;

console.log('its continuous');

//popup event
window.onload= function () {
  const pp=document.getElementById("popup");
  pp.style.display="block"; 
}
document.querySelector(".close-button").addEventListener("click",function(){
  const pp=document.getElementById("popup");
  pp.style.display="none";
});

// data fetch 
let imp = null;
async function fetchdata() {
  let data = await fetch("https://api.data.gov.in/resource/1cacafdf-0ffb-4b59-8bec-2feae5630750?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json");
  let pre = await data.json();
  imp = pre.records;
  console.log(imp);

}
fetchdata();

//user selection and further response:

let choice = document.getElementById('iits');
choice.addEventListener('change', function () {

  let insti = choice[choice.selectedIndex].text;
  alert("your selected insti is : " + insti );
  console.log(imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2015);

  let vs2014 = imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2014;
  let vs2015 = imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2015;
  let vs2016 = imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2016;
  let vs2017 = imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2017;


  //change in the html text
  let para1 = document.getElementById("name");
  para1.textContent = `Name of the Institute: ${imp[choice.selectedIndex].name_of_the_institute}`;
  let para2 = document.getElementById("2014");
  para2.textContent = `number of V.S in 2014: ${vs2014}`;
  let para3 = document.getElementById("2015");
  para3.textContent = `number of V.S in 2015: ${vs2015}`;
  let para4 = document.getElementById("2016");
  para4.textContent = `number of V.S in 2016: ${vs2016}`;
  let para5 = document.getElementById("2017");
  para5.textContent = `number of V.S in 2017: ${vs2017}`;

  newhead=document.getElementById("new");
  newhead.textContent = " your data is here : "

  
  console.log(vs2014, vs2015, vs2016, vs2017);

  //plotting the data :
  const xarray = [2014, 2015, 2016, 2017];
  let yarray = [vs2014,vs2015,vs2016,vs2017];

  let data = [{
    x: xarray,
    y: yarray,
    mode:"line"
  }];

  let layout = {
    xaxis: { range: [2012,2018], title: "year" },
    yaxis: { range: [-5, 40], title: "vacant seats" },
    title: `year wise data for ${insti}`,
    backgroundcolor:"#564980"
  };

  Plotly.newPlot("myplot", data, layout);
})






