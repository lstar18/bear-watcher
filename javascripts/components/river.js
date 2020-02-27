import util from '../helpers/util.js';
import bearsData from '../helpers/data/bearsData.js'
const printAllBears = () => {
    let domString = ''
    const allBears = bearsData.getBears();
    allBears.forEach((x)=> {
    domString += 'div class="card" style="width: 18rem;">'
    domString += `<img src="${x.imageUrl}" class="card-img-top" alt="...">`
    domString += '<div class="card-body">'
    domString += `<h5 class="card-title">${x.name}</h5>`
    domString += '</div>' 
    domString += '</div>'
    })

};
export default { printAllBears }