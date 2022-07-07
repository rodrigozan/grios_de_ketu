import UserService from './user.services';

const controller = {}

controller.get = async (req, res, next) => {
    await UserService.find({})
        .then(users => res.status(201).json({ message: 'Users successfully', users: users }))
        .catch(err => console.log(err));
    next();
}

controller.getById = (req, res, next) => { }

controller.post = async (req, res, next) => {
    const { nome, email } = req.body
    console.log(`${nome}, ${email}`)
    await UserService.insert(nome, email)
        .then(res.status(201).json({ message: 'Users add successfully' }))
        .catch(err => console.log(err));
    next();
}

controller.update = (req, res, next) => { }

controller.delete = (req, res, next) => { }

export default controller