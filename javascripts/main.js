import bears from './components/bears.js'
import printBears from './components/river.js'


const init = () => {
    bears.sumbitBearEvent();
    printBears.printAllBears();
    $("fish-attempt").click(fishAttemptEvent)
}
init();