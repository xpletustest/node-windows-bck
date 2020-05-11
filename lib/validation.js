
function isValidFailureAction(action) {
    const allowedActions = ['reboot','restart','none'];
    return (action && (typeof action === "string")
        && allowedActions.includes(action));
}

function isValidFailureDelay(delay) {
    const allowedSuffices = ['sec','secs','min','mins','hour','hours','day','days'];
    if (!delay || (typeof delay !== "string"))
        return false;
    items = delay.split(' ');
    const [value, suffix] = items;
    const parsed = parseInt(value, 10);
    return ((items.length == 2) && value && suffix
        && (parsed !== NaN) && (parsed > 0) && (parsed == value)
        && allowedSuffices.includes(suffix));
}

function isValidOnFailure(onFailures) {
    if (!onFailures || !(onFailures instanceof Array) || onFailures.length === 0 )
        return false;
    console.log
    for (onFailure of onFailures) {
        const {action, delay} = onFailure;
        if (!isValidFailureAction(action) || !isValidFailureDelay(delay)) {
            return false
        }
    }
    return true;
}

module.exports = {
    isValidOnFailure,
    isValidFailureDelay
}
