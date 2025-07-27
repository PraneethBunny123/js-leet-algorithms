// class Stack {
//     constructor() {
//       this.items = []; // Array to store stack elements
//     }
  
//     // Add an element to the stack
//     push(element) {
//       this.items.push(element);
//     }
  
//     // Remove and return the top element of the stack
//     pop() {
//       if (this.isEmpty()) {
//         return "Stack is empty";
//       }
//       return this.items.pop();
//     }
  
//     // View the top element without removing it
//     peek() {
//       if (this.isEmpty()) {
//         return "Stack is empty";
//       }
//       return this.items[this.items.length - 1];
//     }
  
//     // Check if the stack is empty
//     isEmpty() {
//       return this.items.length === 0;
//     }
  
//     // Get the size of the stack
//     size() {
//       return this.items.length;
//     }
  
//     // Print the stack elements
//     print() {
//       console.log(this.items.join(" "));
//     }
//   }
  
//   // Example usage
//   const stack = new Stack();
//   stack.push(10);
//   stack.push(20);
//   stack.push(30);
  
//   console.log("Top element:", stack.peek()); // Output: 30
//   console.log("Stack size:", stack.size());  // Output: 3
  
//   stack.print(); // Output: 10 20 30
  
//   console.log("Popped element:", stack.pop()); // Output: 30
//   stack.print(); // Output: 10 20
  
  ////////////////////////////////////////////////////////////////////


class Stack {
  constructor() {
    this.items = []; // Array to store elements
    this.top = -1;   // Pointer to the top of the stack
  }

  // Add an element to the stack
  push(element) {
    this.top += 1;         // Increment the top pointer
    this.items[this.top] = element; // Assign the element manually
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const element = this.items[this.top]; // Get the top element
    this.items.length = this.top;         // Shrink the array manually
    this.top -= 1;                        // Decrement the top pointer
    return element;
  }

  // View the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.top];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === -1;
  }

  // Get the size of the stack
  size() {
    return this.top + 1;
  }

  // Print the stack elements
  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let output = "";
    for (let i = 0; i <= this.top; i++) {
      output += this.items[i] + " ";
    }
    console.log(output.trim());
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: 30
console.log("Stack size:", stack.size());  // Output: 3

stack.print(); // Output: 10 20 30

console.log("Popped element:", stack.pop()); // Output: 30
stack.print(); // Output: 10 20
