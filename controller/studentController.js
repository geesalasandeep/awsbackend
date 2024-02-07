const modalregister = require('../modal/studentmodel');

const register = async (req, res, next) => {
    const { Name, email, rollno, branch } = req.body;
    try {
        let exitemail = await modalregister.findOne({ email: email });
        console.log(exitemail);
        if (!exitemail) {
            const response = await modalregister.insertMany({
                Name, email, rollno, branch
            });
            res.json({
                message: 'register successfully',
                iserror: false,
                response: response,
                status: 200
            })
        } else {
            res.json({
                message: 'already exists',
                iserror: false,
                status: 200
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            staus: 500,
            message: "enter all data",
            error: err
        })
    }
}

module.exports = register
