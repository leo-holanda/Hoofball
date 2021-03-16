function checkIsNumber(rows, headerPosition){
  let currentValue = rows[1].getElementsByTagName("TD")[headerPosition].innerHTML;
  return !(isNaN(currentValue)) ? true : false
}

function removeSortingSymbol(){
  const rows = document.getElementById("suggestions_table").rows;
  const headers = rows[0].getElementsByTagName("TH")
  
  for(header of headers){
    header.innerHTML = header.innerHTML.replace('▴', '')
    header.innerHTML = header.innerHTML.replace('▾', '')
    header.innerHTML = header.innerHTML.replace(' ', '')
  }
}

function sortTable(headerPosition) {
  const rows = document.getElementById("suggestions_table").rows;
  let isNumber = checkIsNumber(rows, headerPosition)
  let selectedHeader = rows[0].getElementsByTagName("TH")[headerPosition]
  console.log(selectedHeader.textContent)

  if (selectedHeader.textContent.includes('▴')){
    sortingDirection = "ascending"
  }
  else{
    sortingDirection = "descending"
  }

  removeSortingSymbol()

  let currentValue, comparativeValue
  for (let i = 1; i < (rows.length - 1); i++) {
    let wasSwapped = false
    for (let j = 1; j < (rows.length - 1); j++) {
      currentValue = rows[j].getElementsByTagName("TD")[headerPosition].innerHTML;
      comparativeValue = rows[j+1].getElementsByTagName("TD")[headerPosition].innerHTML;

      if(isNumber){
        if(sortingDirection == 'ascending'){
          if (parseInt(currentValue) < parseInt(comparativeValue)) {
            wasSwapped = true
            rows[i].parentNode.insertBefore(rows[j + 1], rows[j]);
          }
        }
        else if (sortingDirection == 'descending') {
          if (parseInt(currentValue) > parseInt(comparativeValue)) {
            wasSwapped = true
            rows[i].parentNode.insertBefore(rows[j + 1], rows[j]);
          }
        }
      }
      else{
        if(sortingDirection == 'ascending'){
          if ((currentValue.toLowerCase() < comparativeValue.toLowerCase())) {
            wasSwapped = true
            rows[i].parentNode.insertBefore(rows[j + 1], rows[j]);
          }
        }
        else if(sortingDirection == 'descending'){
          if ((currentValue.toLowerCase() > comparativeValue.toLowerCase())) {
            wasSwapped = true
            rows[i].parentNode.insertBefore(rows[j + 1], rows[j]);
          }
        }
      }
    }
    if(!wasSwapped){
      break
    }
  }
  if(sortingDirection == 'ascending'){
    rows[0].getElementsByTagName("TH")[headerPosition].innerHTML += ' ▾';
  }
  else{
    rows[0].getElementsByTagName("TH")[headerPosition].innerHTML += ' ▴';
  }
}