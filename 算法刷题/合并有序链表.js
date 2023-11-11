//  Definition for singly-linked list.
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let newNode = new ListNode();
    // 初始化
    if (list1.val <= list2.val) {
        newNode.val = list1.val;
        list1 = list1.next;
    } else {
        newNode.val = list2.val;
        list2 = list2.next;
    }

    let curNode = newNode;
    while (list1 || list2) {
        // 每次循环只能比较一个
        if (list1 && list2) {
            if (list1.val <= list2.val) {
                // moveNext(list1);
                curNode.next = new ListNode(list1.val);
                list1 = list1.next;
                curNode = curNode.next;
            } else {
                // moveNext(list2);
                curNode.next = new ListNode(list2.val);
                list2 = list2.next;
                curNode = curNode.next;
            }
        } else {
            if (list1) {
                curNode.next = list1;
                list1 = null;
            } else if (list2) {
                curNode.next = list2;
                list2 = null;
            }
        }
    }

    return newNode;
}

const list1 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};
const list2 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};
console.log(mergeTwoLists(list1, list2));
