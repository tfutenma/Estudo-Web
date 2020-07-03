const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 4 * * 3', function () { //3 quarta feira, 4 quatro horas, 5 cinco em cinco segundos
      console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
      tarefa1.cancel()
      console.log('Cancelando Tarefa 1')
}, 20000) //20000 mili segundos

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //1 segunda a 5 sexta
regra.hour = 4 // 4 horas
regra.second = 10 //10 segundos

const tarefa2 = schedule.scheduleJob(regra, function () {
      console.log('Executando Tarefa 2!', new Date().getSeconds())
})