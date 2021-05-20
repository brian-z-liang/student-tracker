const Student = require('../models/StudentModel');


//Object of middleware functions
const StudentController = {

  createNewStudent(req, res, next) {
    Student.create({ name: req.body.Name }, (err, newStudent) => {
      if(err) {
				console.log('error in controller')
        next(err);
      }
      next();
    });
  }
};


module.exports = StudentController;
