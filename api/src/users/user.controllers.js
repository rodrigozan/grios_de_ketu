import UserService from './user.services';

const controller = {}

controller.get = async (req, res, next) => {
    await UserService.find()
        .then(users => res.status(201).json({ message: 'Users successfully', users: users }))
        .catch(err => console.log(err));
    next();
}

controller.getById = async (req, res, next) => {
    await UserService.findById(req.params.id)
        .then(user => res.status(201).json({ message: 'User successfully', user: user }))
        .catch(err => console.log(err));
    next();
}

controller.post = async (req, res, next) => {
    await UserService.insert(req.body)
        .then(res.status(201).json({ message: 'Users add successfully' }))
        .catch(err => console.log(err));
    next();
}

controller.update = async (req, res, next) => { 
    await UserService.update(req.body, req.params.id)
        .then(res.status(201).json({ message: 'User updated successfully' }))
        .catch(err => console.log(err));
    next();
}

controller.delete = async (req, res, next) => { 
    await UserService.remove(req.params.id)
        .then(res.status(201).json({ message: 'User deleted successfully' }))
        .catch(err => console.log(err));
    next();
}

export default controller