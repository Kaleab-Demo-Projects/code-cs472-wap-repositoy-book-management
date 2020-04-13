/* 
 * List of books library
 * @author Girma Moges Teklemariam
 * @since April 2020
 */

(function() {
    getListOfBooks();
})();

function getListOfBooks() {
    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject({
                    status: response.status,
                    statusTextResponse: response.statusText
                });
            }
        })
        .then(books => {
            let content = "";
            books.forEach(function(book, i) {
                content += `
                <tr>
                    <th scope="row">${i+1}.</th>
                    <td>${book.isbn}.</td>
                    <td>${book.title}.</td>
                    <td>${new Intl.NumberFormat("en-US", {style: "currency", currency:"USD", minimumFractionDigits:2}).format(book.overdueFee)}.</td>
                    <td>${book.publisher}.</td>
                    <td>${book.datePublished}.</td>
                    `
            });
            document.querySelector("#tBody").innerHTML = content;
        })
        .catch(err => {
            console.log("Error Message: " + err.statusText);
            document.getElementById("bookList").innerHTML = "<p style='color: red; '>We are sorry, The Library book service is unavailable</p>"
        })
}