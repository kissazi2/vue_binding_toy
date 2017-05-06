/**
 * 对比之前的数据
 * Created by bang on 2017/5/6.
 */
import Dep from './Dep'
export default class Watcher {
    constructor(vm, expOrFuc, callback) {
        this._expOrFn = expOrFuc;
        this._vm = vm;
        this._callback = callback;
        this._val = this.get();
    }

    update() {
        //compare the data
        const newVar = this.get();
        if (this._val !== newVar) {
            this._val = newVar;
            this._callback.call(this._vm);
        }
    }

    get() {

        //inject the watcher to observer
        Dep.target = this;
        const val = this._vm._data[this._expOrFn];
        Dep.target = null;
        return val;
    }


}