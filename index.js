/* Your Code Here */
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array){
    return array.map((innerArray) => createEmployeeRecord(innerArray))
}

function createTimeInEvent(time){
    let dateHourArray = time.split(" ")
    let timeInObject = {
        type: "TimeIn",
        hour: parseInt(dateHourArray[1]),
        date: dateHourArray[0]
    }
    this.timeInEvents.push(timeInObject)
    return this
}

function createTimeOutEvent(time){
    let dateHourArray = time.split(" ")
    let timeOutObject = {
        type: "TimeOut",
        hour: parseInt(dateHourArray[1]),
        date: dateHourArray[0]
    }
    this.timeOutEvents.push(timeOutObject)
    return this
}

function hoursWorkedOnDate(date){
    const startObject = this.timeInEvents.find((object) => object["date"] === date)
    const endObject = this.timeOutEvents.find((object) => object["date"] === date)

    const hoursWorked = (endObject.hour - startObject.hour)/100

    return hoursWorked
}

function wagesEarnedOnDate(date){
    const hours = hoursWorkedOnDate.call(this, date)
    const wages = hours * this.payPerHour

    return wages
}

function findEmployeeByFirstName(array, firstName){
    return array.find(function(object) {
        return object.firstName === firstName
    })

}


function calculatePayroll(employees){
    let totalPayOwed = employees.map(function(employee) {
        return allWagesFor.call(employee)
    })
    return totalPayOwed.reduce(function(previous, current){
        return previous + current
    }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

