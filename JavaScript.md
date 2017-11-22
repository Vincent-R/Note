## JavaScript

### Basic knowledge
* JavaScript把`null`, `undefined`, `0`, `NaN`和`''`视为false，其他值一概视为true
* "=="与"==="
> "=="比较：它会自动转换数据类型再进行比较，很多时候会得到错误的结果。  
> "==="比较：它不会自动转换数据类型，如果数据类型不一致，返回false；如果一致，再进行比较。

* NaN(Not a Number):这个特殊的Number与所有其他值都不相同，包括他自己。
> NaN === NaN; //false  
> 唯一能够判断NaN的方法是通过isNaN()函数。  
> isNaN(NaN); //true

* 浮点数比较：浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值是否小于某一阈值。
> 1/3 === (1-2/3); //false
> Math.abs(1/3-(1-2/3)) < 0.0000001; //true

* JavaScript的数组可以包含任意数据类型。例:[1, 2, 3.2, 'hello', null, true] 

* `use strict` : 一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量，多个未用var申明变量会造成命名冲突。通过使用`use strict`,在使用未用var申明的变量时就会报错。

* 多行字符串(`...`)
> ```
> console.log(`多行
> 字符串
> 测试`);//会按照这个换行形式输出
> ```

* 模板字符串(`...`)
> ```
> var name = 'hello';
> var age = '17';
> var message = `${name},i am ${age}`; //hello,i am 17
> ```

* 字符串常见操作
> `str.length` //长度  
> `str.toUpperCase()` //大写  
> `str.toLowerCase()` //小写  
> `str.indexOf()` //查询指定字符出现位置  
> `str.substring()` //截取字符串  

* 数组常见操作
> `array.length` //长度  
> `array.indexOf()` //搜索指定元素位置  
> `array.slice()` //截取字符串  
> `array.pop()` //返回数组最后一个元素并删除
> `array.push()` //向最后添加元素  
> `array.shift()` //返回数组第一个元素并删除  
> `array.unshift()` //向数组头部添加元素  
> `array.sort()` //数组排序  
> `array.reverse()` //数组反转  
> `array.splice()` //它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素  
> `array.concat()` //当前的Array和另一个Array连接起来，并返回一个新的Array。concat()方法并没有修改当前Array，而是返回了一个新的Array  
> `array.join()` //它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串

* 对象
> 对象访问是通过`.`操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来。
> ```
> var xiaohong = {
>   name: 'xiaohong',
>   'middle-school': 'No.1 Middle School'   
> }
> //xiaohong的属性名middle-school不是一个有效的变量，就需要用''括起来。访问这个属性也无法使用.操作符，必须用['xxx']来访问
> xiaohong['middle-school']
> xiaohong['name']
> xiaohong.name
> ``` 

* forEach循环
> ```
> a.forEach(function (element, index, array) {
>    // element: 指向当前元素的值
>    // index: 指向当前索引
>    // array: 指向Array对象本身
>    console.log(element + ', index = ' + index);
> });
> ```

* 申明函数(函数内部存在关键字arguments，指向该函数的所有参数)
> var abs = function (){};  
> function abs(){};