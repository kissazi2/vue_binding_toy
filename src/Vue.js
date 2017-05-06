/**
 * Created by bang on 2017/5/6.
 */
import Observer,{observe} from "./Observer"
import Watcher from "./Watcher"

export default class Vue {
    constructor(config = {}) {
        this._data = config.data;

        //添加对数据的监听
        this._proxy();
    }
    $watch(expOrFn,callback){
        observe(this._data);
        new Watcher(this,expOrFn,callback);
    }

    _proxy() {
        Object.keys(this._data).forEach(key => {

            Object.defineProperty(this, key, {
                configurable: true,
                enumerable: true,
                get: () => {
                    // console.log('enter proxy get' + key);
                    return this._data[key];
                },
                set: (newVal) => {
                    // console.log('enter proxy set' + key);
                    this._data[key] = newVal;
                }

            })

        });
    }

}