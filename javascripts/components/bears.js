import bearsData from '../helpers/data/bearsData.js'
import river from '../components/river.js'

const addBear = (e) => {
    e.preventDefault();
 const bearName= $('#bear-name').val();
    const bearImage = $('#bear-image').val();  
const allBears = bearsData.getBears();
    bearsData.setBears({
        name:bearName, 
        imageUrl: bearImage,
        bearId:`bear${allBears.length +1})`,
        fishAttempts: 0,
        fishCaught: 0,
    })
    river.printAllBears();
    $('#new-bear-form').trigger('reset');
   };


const sumbitBearEvent = () => {
$('#bear-button').click(addBear);
};

export default { sumbitBearEvent }