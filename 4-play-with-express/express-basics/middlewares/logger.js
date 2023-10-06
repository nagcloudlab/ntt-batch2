

// cjs
// esm


function logger(req, res, next) {

    const method = req.method;
    const url = req.url;
    const start = +new Date();
    res.on('finish', () => {
        const ms = +new Date() - start;
        const logMessage = `${method} ${url} took ${ms}ms \n`;
        process.stdout.write(logMessage);
    })

    next();

}

module.exports = logger