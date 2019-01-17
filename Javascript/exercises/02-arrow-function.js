// ES5
var obj_es5 = {
  id: 42,
  counter: function counter() {
    setTimeout(
      function() {
        console.log(this.id);
      }.bind(this),
      1000
    );
  }
};

obj_es5.counter();

// ES6
const obj_es6 = {
  id: 42,
  counter: function counter() {
    setTimeout(() => {
      console.log(this.id);
    }, 1000);
  }
};

obj_es6.counter();