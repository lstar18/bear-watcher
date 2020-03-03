const bears = [];

const setBears = (newBearObject) => {
    bears.push(newBearObject);
}
const getBears = () => {
    return bears
};

const addFishAttempt = (bearId) => {
    const bearPosition = bears.findIndex((bear) => bear.id === bearId);
    bears[bearPosition].fishAttempts += 1
}

export default { getBears, setBears, addFishAttempt };