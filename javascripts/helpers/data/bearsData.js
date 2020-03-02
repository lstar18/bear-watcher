const bears = [];

const setBears = (newBearObject) => {
    bears.push(newBearObject);
}
const getBears = () => {
    return bears
};

const fishAttemptEvent = (e) => {
    const bearId = e.target.id
    const bearPosition = getBears.findIndex((p) => p.id === bearId);
        getBears[bearPosition].fishAttempts += 1
}

export default { getBears, setBears };