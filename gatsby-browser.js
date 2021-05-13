require('./src/styles/global.scss')

exports.onRouteUpdate = ({location, prevLocation}) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}
