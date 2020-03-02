import util from '../helpers/util.js';
import bearsData from '../helpers/data/bearsData.js'
const printAllBears = () => {
    const allBears = bearsData.getBears();
    let domString = ''
    allBears.forEach((bear)=> {
    domString += '<div class="card">'
    domString += `<img src="${bear.imageUrl}" class="card-img-top" alt="...">`
    domString += '<div class="card-body">'
    domString += `<h5 class="card-title">${bear.name}</h5>`
    domString += '</div>' 
    domString += '</div>'
   
    });
    util.printToDom('river', domString);
};
export default { printAllBears }