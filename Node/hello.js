function Hello() {
    var name;
    this.setName = function(thyName) {
        this.name = thyName;
    }

    this.sayHello = function() {
        console.log(this.name);
        return this.name;
    }
}

module.exports = Hello;