import UserService from './user.services';

const controller = {}

controller.get = async (req, res, next) => {
    await UserService.find({})
        .then(users => res.status(201).json({ message: 'Users successfully', users: users }))
        .catch(err => console.log(err));
    next();
}

controller.getById = (req, res) => { }

controller.post = (req, res) => { }

controller.update = (req, res) => { }

controller.delete = (req, res) => { }

export default controller