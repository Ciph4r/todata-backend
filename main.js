/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(obj) {
  return obj.text
}
const getCompleteness = function() {

}
const getPriority = function(obj) {
  return obj.priority
}
const isComplete = function(obj) {
  return obj.complete
}
const isHighPriority = function(obj) {
  return obj.priority === 2
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(array) {
  return array.map(getTodoName)
}
const priorities = function(array) {
  return array.map(getPriority)
}
const namesAndPriorities = function(obj) {
  return obj.map(x => `${x.text} - ${x.priority === 1 ? 'Low' : 'High'}`)
}
const justNotComplete = function(obj) {
  return obj.filter(x => x.complete === false)
}
const justComplete = function(obj) {
  return obj.filter(isComplete)
}
const priority2Only = function(obj) {
  return obj.filter(isHighPriority)
}
const priority1Only = function(obj) {
  return obj.filter(x => x.priority === 1)
}






module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
