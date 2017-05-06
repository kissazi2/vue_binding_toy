import Dep from "./Dep"
export default class Observer {
    constructor(value) {
        this.value = value;
        // console.log("enter constructor");
        this.walk();
    }

    walk() {
        Object.keys(this.value).forEach(key => {
            defineReactive(this.value, key, this.value[key])
        })
    }

}

export function defineReactive(obj, key, data) {
    observe(data);
    var dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            // console.log('enter get : ' + key);
            if (Dep.target){
                dep.addSub(Dep.target);
            }
            return data;
        },
        set: function (newVal) {
            if(newVal===data){
                return;
            }
            data = newVal;
            // console.log('enter set' + key + ' with newVal : ' + newVal);
            observe(newVal);
            if (dep){
                // console.log("Observer set : dep notify ");
                dep.notifyAll();
            }

        }
    });
}


export function observe(obj) {
    if (obj && typeof obj !== 'object') {
        // console.log('in observe return');
        return;
    } else {
        // console.log('in observe' + obj);
        return new Observer(obj);

    }

}



