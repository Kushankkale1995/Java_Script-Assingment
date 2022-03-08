function RunCallback(a, b, cb) {

    let res = a+b
    return cb(res)
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
}

module.exports = RunCallback;
