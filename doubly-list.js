/*--------------------------------------------------------------------------------*\
 | MIT License                                                                    |
 |                                                                                |
 | Copyright (c) 2017 Gustavo Takachi Toyota                                      |
 |                                                                                |
 | Permission is hereby granted, free of charge, to any person obtaining a copy   |
 | of this software and associated documentation files (the "Software"), to deal  |
 | in the Software without restriction, including without limitation the rights   |
 | to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      |
 | copies of the Software, and to permit persons to whom the Software is          |
 | furnished to do so, subject to the following conditions:                       |
 |                                                                                |
 | The above copyright notice and this permission notice shall be included in all |
 | copies or substantial portions of the Software.                                |
 |                                                                                |
 | THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     |
 | IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       |
 | FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    |
 | AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         |
 | LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  |
 | OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  |
 | SOFTWARE.                                                                      |
\*--------------------------------------------------------------------------------*/

function DoublyList() {
    if (!(this instanceof DoublyList))
        return new DoublyList();

    this.begin = null;
    this.end = null;
    
    this.length = 0;
}

DoublyList.prototype.pushFront = function (item) {
    var node = {item: item, prev: null, next: this.begin};
    if (this.begin === null)
        this.end = node;
    else
        this.begin.prev = node;
    this.begin = node;
    
    ++this.length;
    
    return node;
};
DoublyList.prototype.pushBack = function (item) {
    var node = {item: item, prev: this.end, next: null};
    if (this.end === null)
        this.begin = node;
    else
        this.end.next = node;
    this.end = node;
    
    ++this.length;
    
    return node;
};

DoublyList.prototype.popFront = function () {
    var node = this.begin;
    if (node.next === null)
        this.end = null;
    else
        node.next.prev = null;
    this.begin = node.next;
    
    --this.length;
};
DoublyList.prototype.popBack = function () {
    var node = this.end;
    if (node.prev === null)
        this.begin = null;
    else
        node.prev.next = null;
    this.end = node.prev;
    
    --this.length;
};

DoublyList.prototype.remove = function (node) {
    if (node.prev === null)
        this.begin = node.next;
    else
        node.prev.next = node.next;
    if (node.next === null)
        this.end = node.prev;
    else
        node.next.prev = node.prev;
    
    --this.length;
};
DoublyList.prototype.clear = function () {
    this.begin = null;
    this.end = null;
    
    this.length = 0;
};