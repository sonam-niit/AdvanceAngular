//generic constraints
function find<T extends {id:number}>(items:T[],id:number): T|undefined{
    return items.find(item=>item.id===id);
}

//generic function
function indentity<T>(arg:T){
    return arg;
}
//generic class
class Stack<T>{
    private items:T[] = [];

    push(item:T){
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
}
//generic interface
interface KeyValuePair<K,V>{
    key:K;
    value:V;
}
//declare generic type alias
type Queue<T>= T[];








