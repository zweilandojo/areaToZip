function convertZipCodes(e) {
  // Define Agent Areas
  let agentAreas = e;
  //console.log(agentAreas);
  let agentAreasArr = agentAreas.split(', ');
  //console.log(agentAreasArr);
  let agentAreaValues = Object.values(agentAreasArr);

  const austin = [
      {area: 'All', zips: '76530, 76574, 78602, 78610, 78612, 78613, 78615, 78616, 78617, 78619, 78620, 78621, 78626, 78628, 78632, 78633, 78634, 78640, 78641, 78642, 78644, 78645, 78648, 78650, 78652, 78653, 78654, 78655, 78656, 78659, 78660, 78664, 78665, 78666, 78669, 78676, 78681, 78701, 78702, 78703, 78704, 78705, 78712, 78717, 78719, 78721, 78722, 78723, 78724, 78725, 78726, 78727, 78729, 78730, 78731, 78732, 78733, 78734, 78735, 78736, 78737, 78738, 78739, 78741, 78742, 78744, 78745, 78746, 78747, 78748, 78749, 78750, 78751, 78752, 78753, 78754, 78756, 78759, 78957'},
      {area: 'Austin - Central', zips: '78701, 78703, 78712, 78731, 78705, 78751, 78756'},
      {area: 'Austin - North West', zips: '78731, 78730, 78750, 78726, 78759, 78729, 78727'},
      {area: 'Austin - North Central', zips: '78757, 78753, 78727, 78729, 78681, 78728, 78752, 78758'},
      {area: 'Austin - East', zips: '78702, 78722, 78723, 78752, 78753, 78754, 78724, 78721, 78725, 78659'},
      {area: 'Austin - South East', zips: '78741, 78742, 78744, 78747, 78719, 78617'},
      {area: 'Austin - South', zips: '78704, 78745, 78749, 78748'},
      {area: 'Austin - South West', zips: '78748, 78652, 78739, 78737, 78749'},
      {area: 'Austin - West/Westlake', zips: '78735, 78736, 78746, 78730, 78732, 78726, 78733'},
      {area: 'Lake Travis - South Shore', zips: '78738, 78734, 78669, 78657'},
      {area: 'Lake Travis - North Shore', zips: '78645, 78641, 78654'},
      {area: 'Pflugerville', zips: '78659, 78753, 78754, 78660, 78664'},
      {area: 'Georgetown', zips: '78628, 78633, 78626, 76530'},
      {area: 'Round Rock', zips: '78665, 78664, 78681, 78717, 78613'},
      {area: 'Manor/Elgin', zips: '78653, 78621, 78650'},
      {area: 'Hutto/Taylor/Coupland', zips: '78634, 76574, 78615'},
      {area: 'Bastrop/Smithville', zips: '78617, 78612, 78602, 78957'},
      {area: 'Dripping Springs/Wimberley', zips: '78620, 78737, 78619, 78676'},
      {area: 'Kyle/Buda/San Marcos', zips: '78610, 78640, 78644, 78656, 78666, 78655'},
      {area: 'Caldwell/Fayetteville', zips: '78644, 78616, 78648, 78632'},
      {area: 'Cedar Park/Leander/Liberty Hill', zips: '78613, 78641, 78642, 78717'}
  ];

  zipList = [];
  Object.keys(agentAreaValues).forEach(function(key, index) {
    const result = austin.find( areaToZips => areaToZips.area === this[key] );
    console.log(this[key] + " = " + result.zips);
    zipList.push(result.zips);
  }, agentAreaValues);
  let zips = zipList.join(", ");

  function removeDuplicates(arr){
      let unique_array = []
      for(let i = 0;i < arr.length; i++){
          if(unique_array.indexOf(arr[i]) == -1){
              unique_array.push(arr[i])
          }
      }
      return unique_array
  }
  let uniqueZips = removeDuplicates(zips.split(', ')).join(", ");
  let uniqueZipsLength = removeDuplicates(zips.split(', ')).length;

  console.log(uniqueZips);
  console.log(uniqueZipsLength);

  return uniqueZips; // exports all unique zips
}

////////////////////////////////////////////////////////////////////////

// Show converted list of zip codes to user
function showZips() {
  var textarea = document.getElementById('areasToConvert');
  var textareaValue = textarea.value;
  var p = document.getElementById('convertedZips')
  var output = convertZipCodes(textareaValue);
  p.innerHTML = output;
  return false;
}

// Allow user to press enter in textarea to see result
var textarea = document.getElementById("areasToConvert");

try {
    textarea.addEventListener("keydown", keyPress, false);
} catch (e) {
    textarea.attachEvent("onkeydown", keyPress);
}

function keyPress(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        showZips();
        return false;
    } else {
        return;
    }
}
