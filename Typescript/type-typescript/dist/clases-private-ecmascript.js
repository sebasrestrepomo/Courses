"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _title, _orientation, _id_1, _title_1, _pictures;
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript  3.8
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        //Propiedades
        _id.set(this, void 0);
        _title.set(this, void 0);
        _orientation.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _orientation, orientation);
    }
    //comportamiento
    Picture.prototype.toString = function () {
        return "[id:" + __classPrivateFieldGet(this, _id) + ",\n                        title:" + __classPrivateFieldGet(this, _title) + ",\n                        orientation:" + __classPrivateFieldGet(this, _orientation) + "]";
    };
    return Picture;
}());
_id = new WeakMap(), _title = new WeakMap(), _orientation = new WeakMap();
var Album = /** @class */ (function () {
    function Album(id, title) {
        _id_1.set(this, void 0);
        _title_1.set(this, void 0);
        _pictures.set(this, void 0);
        __classPrivateFieldSet(this, _id_1, id);
        __classPrivateFieldSet(this, _title_1, title);
        __classPrivateFieldSet(this, _pictures, []);
    }
    Album.prototype.addPicture = function (picture) {
        __classPrivateFieldGet(this, _pictures).push(picture);
    };
    return Album;
}());
_id_1 = new WeakMap(), _title_1 = new WeakMap(), _pictures = new WeakMap();
var album = new Album(238654, 'Personal Pictures');
var picture = new Picture(237644, 'platzi session', PhotoOrientation.Square);
album.addPicture(picture);
console.log('album', album);
//Accediendo a los miembros públicos de nuestra clase
//picture.id = 100;//public
//picture.title = 'Another title';//public
//album.title = 'Personnal activities';
console.log('album', album);
