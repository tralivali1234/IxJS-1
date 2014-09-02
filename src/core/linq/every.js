  /**
   * The every() method tests whether all elements in the Enumerable pass the test implemented by the provided function.
   * @param {Function} callback Function to test for each element, taking three arguments:
   *    currentValue - The current element being processed in the Enumerable.
   *    index - The index of the current element being processed in the Enumerable.
   *    enumerable - The Enumerable some was called upon.
   * @param {Any} [thisArg] Value to use as this when executing callback.
   * @returns {Boolean} true if all elements in the Enumerable passes the test; else false.
   */
  enumerableProto.every = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }
    if (!isFunction(callback)) {
      throw new TypeError();
    }
    var iterator = this[$iterator$](), i = 0;
    while (1) {
      var current = iterator.next();
      if (next.done) { return true; }
      if (!callback.call(thisArg, next.value, i++, this)) { return false; }
    }    
  };