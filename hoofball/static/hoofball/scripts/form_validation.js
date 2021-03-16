function validateForm(){
  const name = suggestion_form.name
  let isValid = true

  if(name.value == ''){
    document.getElementById('name_error').style.display = "flex"
    isValid = false
  }
  else{
    document.getElementById('name_error').style.display = "none"
  }

  const gameID = suggestion_form.gameID
  if (gameID.value == '') {
    document.getElementById('gameID_error').style.display = "flex"
    isValid = false
  }
  else {
    document.getElementById('gameID_error').style.display = "none"
  }

  const age = suggestion_form.age
  if (age.value == '') {
    document.getElementById('age_error').style.display = "flex"
    isValid = false
  }
  else {
    document.getElementById('age_error').style.display = "none"
  }

  const position = suggestion_form.position
  if (position.value == '') {
    document.getElementById('position_error').style.display = "flex"
    isValid = false
  }
  else {
    document.getElementById('position_error').style.display = "none"
  }
  
  const wage = suggestion_form.wage
  if (wage.value == '') {
    document.getElementById('wage_error').style.display = "flex"
    isValid = false
  }
  else {
    document.getElementById('wage_error').style.display = "none"
  }

  const value = suggestion_form.value
  if (value.value == '') {
    document.getElementById('value_error').style.display = "flex"
    isValid = false
  }
  else {
    document.getElementById('value_error').style.display = "none"
  }

  const description = suggestion_form.description
  if (description.value == '') {
    document.getElementById('description_error').style.display = "flex"
    isValid = false
  }
  else {
    document.getElementById('description_error').style.display = "none"
  }


  if(isValid == false){
    return false
  }
}