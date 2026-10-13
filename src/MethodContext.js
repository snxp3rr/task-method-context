import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    _clickHandler: null,
    
    subscribe() {
        this._clickHandler = () => {
            this.count++;
        };
        EventEmitter.on('click', this._clickHandler);
    },
    
    unsubscribe() {
        if (this._clickHandler) {
            EventEmitter.off('click', this._clickHandler);
            this._clickHandler = null;
        }
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {
        // здесь ничего писать не нужно
    },
};