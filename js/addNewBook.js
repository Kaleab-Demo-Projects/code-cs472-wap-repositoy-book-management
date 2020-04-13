(function() {
    const newBook = document.getElementById("addNewBook");
    const txtISBN = document.querySelector("#isbn");
    const txtTitle = document.querySelector("#title");
    const txtOverdueFee = document.querySelector("#overdueFee");
    const txtPublisher = document.querySelector("#publisher");
    const txtDatePublished = document.querySelector("#datePublished");

    newBook.addEventListener('submit', function(e) {
        e.preventDefault();

        const isbn = txtISBN.value;
        const title = txtTitle.value;
        const overdueFee = parseFloat(txtOverdueFee.value);
        const publisher = txtPublisher.value;
        const datePublished = txtDatePublished.value;

        const newAddBook = {
            "isbn": isbn,
            "title": title,
            "overdueFee": overdueFee,
            "publisher": publisher,
            "datePublished": datePublished
        };

        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
                method: "post",
                body: JSON.stringify(newAddBook),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonResponseData) {
                console.log(jsonResponseData);
                txtISBN.value = "";
                txtTitle.value = "";
                txtOverdueFee.value = "0.00";
                txtPublisher.value = "";
                txtDatePublished.value = "";
            })
            .catch(function(error) {
                console.log(error);
            })
    })
})();