module.exports = function parseStringAsArray(params) {
    return params.split(',').map(tech => tech.trim())    
  }
