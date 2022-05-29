let head = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const middleNode = function(head: number[]): number[] {
  if (head.length % 2 === 0) {
    return head.splice((head.length / 2), head.length)
  } else {
    return head.splice(((head.length - 1) / 2), head.length)
  }
};

console.log(middleNode(head))