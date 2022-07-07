import UserService from './user.services';

const controller = {}

controller.get = async (req, res, next) => {
    await UserService.find()
        .then(users => res.status(201).json({ message: 'Users successfully', users: users }))
        .catch(err => console.log(err));
    next();
}

controller.getById = async (req, res, next) => {
    const id = req.params.id
    await UserService.findById(id)
        .then(user => res.status(201).json({ message: 'User successfully', user: user }))
        .catch(err => console.log(err));
    next();
}

controller.post = async (req, res, next) => {
    const { nome, email } = req.body
    await UserService.insert(nome, email)
        .then(res.status(201).json({ message: 'Users add successfully' }))
        .catch(err => console.log(err));
    next();
}

controller.update = async (req, res, next) => { 
    const { nome, email } = req.body
    const id = req.params.id
    await UserService.update(nome, email, id)
        .then(res.status(201).json({ message: 'User updated successfully' }))
        .catch(err => console.log(err));
    next();
}

controller.delete = async (req, res, next) => { 
    const id = req.params.id
    await UserService.remove(id)
        .then(res.status(201).json({ message: 'User deleted successfully' }))
        .catch(err => console.log(err));
    next();
}

export default controller