import bearsData from '../helpers/data/bearsData.js'

const addBear = (e) => {
    e.preventDefault();
    const bearName = document.getElementById('bear-name').value;
    const bearImage = document.getElementById('bear-id').value;
    bearsData.setBears({name:bearName, imageUrl: bearImage});
    console.log(bearsData.getBears());
    document.getElementById('new-bear-form').reset();
   };


const sumbitBearEvent = () => {
document.getElementById('bear-button').addEventListener('click',addBear);
};

export default { sumbitBearEvent }