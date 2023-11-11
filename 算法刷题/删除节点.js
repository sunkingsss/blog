class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeElements(head, val) {
    let curPointer = head,
        prePointer = head;
    while (curPointer) {
        if (curPointer.val === val) {
            if (prePointer === curPointer) {
                head = head.next;
                curPointer = head;
                prePointer = head;
            } else {
                prePointer.next = curPointer.next;
                curPointer = prePointer.next;
            }
        } else {
            prePointer = curPointer;
            curPointer = curPointer.next;
        }
    }
    return head;
}

const node = {
    val: 7,
    next: {
        val: 7,
        next: {
            val: 7,
            next: {
                val: 7,
                next: {
                    val: 7,
                    next: {
                        val: 7,
                        next: null
                    }
                }
            }
        }
    }
};

console.log(removeElements(node, 7));
