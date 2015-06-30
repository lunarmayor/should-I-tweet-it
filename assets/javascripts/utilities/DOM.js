let DOM = {
  find: function(selector) {
    return document.querySelector(selector)
  },

  findAll: function(selector) {
    return document.querySelectorAll(selector)
  },
}

export default DOM
