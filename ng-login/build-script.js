const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/ng-login/main.js',
        './dist/ng-login/polyfills.js',
        './dist/ng-login/runtime.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/ng-login.js')
    console.info('Angular Elements created successfully!')

})()