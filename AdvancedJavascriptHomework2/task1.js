/**
 * Задание 1.
Представьте, что у вас есть класс для управления библиотекой.
В этом классе будет приватное свойство для хранения списка книг,
а также методы для добавления книги, удаления книги и получения
информации о наличии книги.

Класс должен содержать приватное свойство #books, которое
инициализируется пустым массивом и представляет собой список
книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу
в список. Если книга с таким названием уже существует в списке,
выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу
из списка по названию. Если книги с таким названием нет в списке,
выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие
книги в библиотеке и возвращать true или false в зависимости от того,
есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг
(массив) в качестве аргумента. Убедитесь, что предоставленный массив
не содержит дубликатов; в противном случае выбрасывайте ошибку.
 */

class Library {
    #books = [];
    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) throw new Error(
            "Такая книга есть в библиотеке"
        );
        this.#books.push(title);
        return this.#books;
    }

    removeBook(title) {
        const bookIndex = this.#books.indexOf(title);
        if (bookIndex === -1) throw new Error(
            "Этой книги нет в библиотеке"
        );
        this.#books.splice(bookIndex, 1);
        return this.#books;
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    constructor(booksArray) {
        booksArray.map(book => {
            if (this.#books.includes(book)) throw new Error(
                `Книга ${book} уже есть в библиотеке`
            );
            this.#books.push(book);
        });
    }
}

const library = new Library(['book1', 'book2', 'book3']);
console.log(library);
// const library2 = new Library(['book1', 'book1', 'book2', 'book3']);
// console.log(library2);
console.log(library.allBooks);
console.log(library.addBook('book4'));
console.log(library.hasBook('book1'));
console.log(library.hasBook('book5'));
// console.log(library.removeBook('book6'));
console.log(library.removeBook('book3'));
console.log(library.allBooks);