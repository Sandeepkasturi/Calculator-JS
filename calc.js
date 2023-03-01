function sum() {
          var a, b, operator, result;
          a = parseFloat(prompt("Enter value 1:"));
          b = parseFloat(prompt("Enter value 2:"));
          operator = prompt("Enter the operator (+,-,*,/,%)");

          switch (operator) {
            case '+':
              result = a + b;
              break;
            case '-':
              result = a - b;
              break;
            case '*':
              result = a * b;
              break;
            case '/':
              result = a / b;
              break;
            case '%':
              result = a % b;
              break;
            default:
              result = "Invalid operator";
          }

          return "The answer is " + result;
        }

        return sum();
      }
