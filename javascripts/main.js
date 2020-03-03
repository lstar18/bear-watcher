import bears from './components/bears.js'
import printBears from './components/river.js'
import bearsData from './helpers/data/bearsData.js'


const fishAttemptEvent = (e) => {
    const bearId = e.target.bearId
    bearsData.addFishAttempt(bearId)
    printBears.printAllBears();
}
const init = () => {
    bears.sumbitBearEvent();
    printBears.printAllBears();
    $('body').on('click','#fish-attempt',fishAttemptEvent);
}
init();