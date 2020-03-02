import bearsData from '../helpers/data/bearsData.js'
import river from '../components/river.js'

const addBear = (e) => {
    e.preventDefault();
    const bearName = document.getElementById('bear-name').value;
    const bearImage = document.getElementById('bear-image').value;
    const allBears = bearsData.getBears();
    bearsData.setBears({
        name:bearName, 
        imageUrl: bearImage,
        bearId:`bear${allBears.length +1})`,
        fishAttempts: 0,
        fishCaught: 0,
    })

    river.printAllBears();
    document.getElementById('new-bear-form').reset();
   };


const sumbitBearEvent = () => {
document.getElementById('bear-button').addEventListener('click',addBear);
};

export default { sumbitBearEvent }