const shell = require("shelljs");

class RunAfterWatchPlugin {
    constructor(options) {
        this.options = options || {};
    }

    apply(compiler) {
        compiler.hooks.done.tap("RunAfterWatchPlugin", (stats) => {
            if (
                stats.compilation.errors.length === 0 &&
                !this.options.disableRun
            ) {
                console.log("=== Output ===");
                shell.exec(`node ${this.options.scriptPath}`);
                console.log("=== Output ===");
            } else {
                console.log(
                    "Webpack watch finished with errors. Command will not run."
                );
            }
        });
    }
}

module.exports = RunAfterWatchPlugin;
