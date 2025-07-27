// class Queue {
//     constructor() {
//         this.items = []
//     }
//    //constant time complexity
//     enqueue(element) {
//         this.items.push(element)
//     }
//     //linear time complexity
//     dequeue(element) {
//         return this.items.shift()
//     }

//     isEmpty() {
//         return this.items.length === 0
//     }

//     peek() {
//         if(!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }

//     size() {
//         return this.items.length
//     }

//     print() {
//         console.log(this.items.toString())
//     }
// }


// let obj = new Queue

// console.log(obj.isEmpty());
// obj.enqueue(4)
// obj.enqueue(5)
// console.log(obj.size());
// obj.print()
// console.log(obj.isEmpty());

////////////////////////////////////////////////////////////////////////////////


class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    //constant time complexity
    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }
    //constant time complexity
    dequeue() {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty() {
        return this.rear-this.front === 0
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear-this.front
    }

    print() {
        console.log(this.items);
    }
}