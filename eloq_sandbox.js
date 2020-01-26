//https://medium.com/javascript-in-plain-english/you-must-understand-these-14-javasript-functions-1f4fa1c620e2

/*
You Must Understand These 14 JavaScript Functions
*/

//1. Determine the specific type of any object
function toRawType(value) {
    let _toString = Object.prototype.toString;
    let str = _toString.call(value);
    return str.slice(8, -1);
}

//console.log(toRawType([1,2,3]));


//2. Caching function calculation results


function functionObj(fn) {

    const obj = Object.create(null);

    return (str_in) => {
        if (!obj[str_in]) {
            let value = fn(str_in);
            obj[str_in] = value;
        }
        return obj[str_in];
    }
}


function computed(str) {
    // Suppose the calculation in the funtion is very time consuming
    console.log('2000s have passed')
    return 'a result'
}

var cachedFn = functionObj(computed);

//console.log(cachedFn("str"));
//console.log(cachedFn("str"));


/* 3. Implement Array.prototype.map */
//var tMap = new Map();

const selfMap = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let mappedArr = Array()
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue;
        mappedArr[i] = fn.call(context, arr[i], i, this)
    }
    return mappedArr
}

Array.prototype.selfMap = selfMap;

var t = [1, 2, 3].selfMap(number => number * 2);
//console.log(t);

var s = [1, 2, 3].map(number => number * 2);
//console.log(s);


/*4. Implement Array.prototype.filter*/
const selfFilter = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue;
        fn.call(context, arr[i], i, this) && filteredArr.push(arr[i])
    }
    return filteredArr
}

Array.prototype.selfFilter = selfFilter;

var e = [1, 2, 3].selfFilter((number) => number > 2);
//console.log(e);


/*5. Implement Array.prototype.some*/
const selfSome = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    if (!arr.length) return false
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue;
        let res = fn.call(context, arr[i], i, this)
        if (res) return true
    }
    return false
}

Array.prototype.selfSome = selfSome;


var w = [1, 2, 3].selfSome((number) => (number === 3));
//console.log(w);



/*6. Implement Array.prototype.reduce*/
const selfReduce = function (fn, initialValue) {
    let arr = Array.prototype.slice.call(this)
    let res
    let startIndex
    if (initialValue === undefined) {
        for (let i = 0; i < arr.length; i++) {
            if (!arr.hasOwnProperty(i)) continue
            startIndex = i
            res = arr[i]
            break
        }
    } else {
        res = initialValue
    }

    for (let i = ++startIndex || 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue
        res = fn.call(null, res, arr[i], i, this)
    }
    return res
}

Array.prototype.selfReduce = selfReduce;
var w = [1, 2, 3].selfReduce((number) => (number == 0));
//console.log(w);


/*7. Implement Array.prototype.flat*/
const selfFlat = function (depth = 1) {
    let arr = Array.prototype.slice.call(this)
    if (depth === 0) return arr
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur)) {
            return [...pre, ...selfFlat.call(cur, depth - 1)]
        } else {
            return [...pre, cur]
        }
    }, [])
}

Array.prototype.selfFlat = selfFlat;

var u = [1, [2, 3], [[4]]].selfFlat();
//console.log(u);

/*8. Curry*/

function curry(fn) {
    //console.log(fn);
    if (fn.length <= 1) return fn;

    const generator = (...args) => {
        //console.log(...args);
        if (fn.length === args.length) {

            return fn(...args)
        } else {

            return (...args2) => {
                //console.log(...args2);
                return generator(...args, ...args2)
            }
        }
    }
    return generator

}



const display = (a, b, c, d, e, f, g, h) => (a, b, c, d, e, f, g, h);
const curriedDisplay = curry(display);

curriedDisplay(1)(2)(3)(4)(5)(6)(7)(8);


//display[1,2,3,4,5,6,7,8];

/*
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
console.log((multiply(1)(2)(3))); // 6*/

//  fn: (l,h,v) => l*h*v
//  ...args: 100
//  return 200,900 => return fn(l,h,v) ----> return fn(100, 200,900)

/*
function curry(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

function volume(l, h, w) {
    return l * h * w
}

const hCy = curry(volume, 100);

console.log(hCy(200, 900)); // 18000000l
console.log(hCy(70, 60)); // 420000l
*/

/*9. Debouncing*/
const debounce = (func, time = 17, options = {
    leading: true,
    context: null
}) => {
    let timer;
    const _debounce = function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        if (options.leading && !timer) {
            timer = setTimeout(null, time)
            func.apply(options.context, args)
        } else {
            timer = setTimeout(() => {
                func.apply(options.context, args)
                timer = null
            }, time)
        }
    };

    _debounce.cancel = function () {
        clearTimeout(timer)
        timer = null
    };
    return _debounce
};


let previous = new Date().getTime()
console.log(previous);





const throttle = (func, time = 17, options = {

    leading: true,
    trailing: false,
    context: null
}) => {
    let previous = new Date(0).getTime()
    let timer;
    const _throttle = function (...args) {
        let now = new Date().getTime();

        if (!options.leading) {
            if (timer) return
            timer = setTimeout(() => {
                timer = null
                func.apply(options.context, args)
            }, time)
        } else if (now - previous > time) {
            func.apply(options.context, args)
            previous = now
        } else if (options.trailing) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(options.context, args)
            }, time)
        }
    };

    _throttle.cancel = () => {
        previous = 0;
        clearTimeout(timer);
        timer = null
    };
    return _throttle
};


function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = i + Math.floor(Math.random() * (arr.length - i));
        //console.log([arr[i], arr[randomIndex]]);
        //console.log([arr[randomIndex], arr[i]]);

        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]

        
    }
    return arr
}

function shuffle2(arr) {
    let _arr = []
    while (arr.length) {
        let randomIndex = Math.floor(Math.random() * (arr.length))
        _arr.push(arr.splice(randomIndex, 1)[0])
    }
    return _arr
}

console.log(shuffle([1, 2, 3, 4, 5]));