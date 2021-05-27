require('colors')

const {inquirerMenu, pausaMenu} = require('./helpers/inquirer')


const main = async () => {
    let opt = ''
    do {
        opt = await inquirerMenu()
        console.log(opt)
        await pausaMenu()
    } while (opt !== '0')

}
main()