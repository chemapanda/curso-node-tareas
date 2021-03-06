const inquirer = require('inquirer')
require('colors')

const menuOpt = [
    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea.'
            },
            {
                value: '2',
                name: '2. Listar tareas.'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas.'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes.'
            },
            {
                value: '5',
                name: '5. Completar tarea(s).'
            },
            {
                value: '6',
                name: '6. Borrar tarea.'
            },
            {
                value: '0',
                name: '0. Salir.'
            }
        ]
    }
]

const inputOpt = [
    {
        type: 'input',
        name: 'confirm',
        message: `Pulsa ${'ENTER'.blue} para continuar`
    }
]


const inquirerMenu = async () => {
    console.clear()
    console.log('============================='.green)
    console.log('   Seleccione una opción'.green)
    console.log('=============================\n'.green)


    const {opt} = await inquirer.prompt(menuOpt);

    return opt
}

const pausaMenu = async () => {
    console.log('\n')
    return await inquirer.prompt(inputOpt)
}

module.exports = {
    inquirerMenu,
    pausaMenu
}