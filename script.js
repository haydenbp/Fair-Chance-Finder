const locationDiv = document.getElementsByClassName('location accessible-contrast-color-location')
const companyDiv = document.getElementsByClassName('company')

let locations = []
let companies = []
let output = ''

companyDiv.forEach(element => companies.push(element.innerText));
locationDiv.forEach(element => addresses.push(element.innerText));

for(let i = 0; i < companies.length; i++){
    output +=`${companies[i]};${addresses[i]}\n`
}

prompt('here you go',output)

