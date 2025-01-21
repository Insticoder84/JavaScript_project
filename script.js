let n = null;

console.log('its continuous');

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

  let n = choice.value;
  let insti = choice[choice.selectedIndex].text;
  alert("your selected insti is : " + insti + " and this no is in the site : ");
  console.log(imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2015);

  //use of data
  //change in the html text
  let para1 = document.getElementById("name");
  para1.textContent = `Name of the Institute: ${imp[choice.selectedIndex].name_of_the_institute}`;
  let para2 = document.getElementById("2014");
  para2.textContent = `number of V.S in 2014: ${imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2014}`;
  let para3 = document.getElementById("2015");
  para3.textContent = `number of V.S in 2015: ${imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2015}`;
  let para4 = document.getElementById("2016");
  para4.textContent = `number of V.S in 2016: ${imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2016}`;
  let para5 = document.getElementById("2017");
  para5.textContent = `number of V.S in 2017: ${imp[choice.selectedIndex].vacant_seats_in_iits_based_on_jee__advanced____2017}`;


})





