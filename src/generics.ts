// 제너릭(Generics)은 타입스크립트에서 함수, 클래스, interface, type alias 를 사용하게 될 때 
// 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법입니다.

function wrap<T>(param: T){
    return param;
}
// 이렇게 함수에서 Generics 를 사용하면 파라미터로 다양한 타입을 넣을 수도 있고 타입 지원을 지켜낼 수 있습니다.

// 인터페이스에서도 제네릭을 사용할 수 있습니다.

interface Items<T>{
    list: T[];
}

const items: Items<string> = {
    list: ['a','b','c']
};

// 클래스에서도 제네릭을 사용할 수 있습니다.

class Queue<T>{
    list: T[] = [];
    get length(){
        return this.list.length;
    }
    enqueue(item: T){
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());