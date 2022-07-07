import BookService from './book.services';

const controller = {}

controller.get = async (req, res, next) => {
    await BookService.find()
        .then(books => res.status(201).json({ message: 'Books successfully', books: books }))
        .catch(err => console.log(err));
    next();
}

controller.getById = async (req, res, next) => {
    await BookService.findById(req.params.id)
        .then(book => res.status(201).json({ message: 'Book successfully', book: book }))
        .catch(err => console.log(err));
    next();
}

controller.post = async (req, res, next) => {
    await BookService.insert(req.body)
        .then(res.status(201).json({ message: 'Books add successfully' }))
        .catch(err => console.log(err));
    next();
}

controller.update = async (req, res, next) => { 
    await BookService.update(req.body, req.params.id)
        .then(res.status(201).json({ message: 'Book updated successfully' }))
        .catch(err => console.log(err));
    next();
}

controller.delete = async (req, res, next) => { 
    await BookService.remove(req.params.id)
        .then(res.status(201).json({ message: 'Book deleted successfully' }))
        .catch(err => console.log(err));
    next();
}

export default controller