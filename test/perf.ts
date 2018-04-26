import * as moment from 'moment'


export default (func: Function): void => {
    const start = moment()

    func()

    const finish = moment()
    const duration = moment.duration(finish.diff(start)).as('ms')
    console.log(`Time: ${duration}ms`)
}