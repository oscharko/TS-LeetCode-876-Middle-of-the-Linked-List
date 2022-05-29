let head = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const middleNode = function(head2) {
  if (head2.length % 2 === 0) {
    return head2.splice(head2.length / 2, head2.length);
  } else {
    return head2.splice((head2.length - 1) / 2, head2.length);
  }
};
console.log(middleNode(head));
//# sourceMappingURL=index.js.map
