/**
 * the props change dependencies collector
 * Created by bang on 2017/5/6.
 */
export default class Dep {
    constructor() {
        this._subArray = [];
    }


    addSub(sub) {
        this._subArray.push(sub);
        // console.log('add sub count: ' + this._subArray.length);
    }

    notifyAll() {
        this._subArray.forEach(item => {
            item.update();
        })
    }
}

