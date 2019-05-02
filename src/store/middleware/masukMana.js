export default function logger() {
  return next => action => {
    console.log('siapa yang duluan [logger]')
    let result = next(action)
    return result
  }
}
