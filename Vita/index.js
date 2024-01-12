// Створіть конструктор для об'єкту користувача з ім'ям та списком завдань. ( User )
// Створіть конструктор для об'єкту завдання з назвою, описом та статусом виконання. ( Task )
// Реалізуйте методи для додавання завдання, видалення завдання та позначення його
//  як виконане для об'єкту користувача.
// Додайте можливість перегляду списку завдань для кожного користувача та їх статусів.

// function User(name) {
//   this.name = name;
//   this.tasks = [];
//   this.addTask = function (task) {
//     this.tasks.push(task);
//   };
//   this.delTask = function (task) {
//     let index = this.tasks.indexOf(task);
//     if (index === -1) {
//       console.log("not found");
//       return;
//     }

//     this.tasks.splice(index, 1);
//   };
//   this.markTaskAsDone = function (task) {
//     let index = this.tasks.indexOf(task);
//     if (index === -1) {
//       console.log("not found");
//       return;
//     }
//     if (this.tasks[index].isDone) {
//       console.log("task completed");
//       return;
//     }
//     this.tasks[index].isDone = true;
//   };
//   this.viewTasks = function () {
//     for (const task of this.tasks) {
//       console.log(`${task.name} - ${task.isDone ? "Done":"In process"}`);

//     }
//   };

// }

// const user = new User("Vita");

// function Task(name, description) {
//   this.name = name;
//   this.description = description;
//   this.isDone = false;
// }

// const task1 = new Task("complete project", "finish the project");
// const task2 = new Task("call Andrew", "upcoming meeting");
// user.addTask(task1);
// user.addTask(task2);
// console.log(user);
// // user.delTask(task1);
// user.markTaskAsDone(task1);
// user.markTaskAsDone(task1);
// console.log(user);
// user.viewTasks()

// Створіть конструктор для об'єкту книги з властивостями,
// такими як назва, автор, жанр та наявність.

// Створіть конструктор для об'єкту бібліотеки,
// який буде мати список книг.

// Реалізуйте методи для додавання нової книги, видалення книги
// та пошуку книг за певними критеріями (наприклад, за назвою,   автором або жанром).

// Додайте можливість перегляду всіх книг у бібліотеці та їх наявності.

function Book(title, author, genre, status) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.isDone = false;
}

const book=new Book()

function Library(params) {
    this.listBooks=[];
  }

