const Employee = require("../models/emp.model");

const employeeFormPage = (req, res) => {
    return res.render('empForm');
}

const errorPage = (req, res) => {
    return res.render('error');
}

// Insert Employee
const addEmployee = async (req, res) => {
    console.log("Insert EMP");
    console.log(req.body);

    try {
        const addEmp = await Employee.create(req.body);

        if (addEmp) {
            console.log("Employee inserted succussfully......");
        } else {
            console.log("Employee insertion failed...");
        }

        return res.redirect('/employee');
    } catch (e) {
        console.log(e);
        console.log(e.message);
        return res.redirect('/employee/error');
    }
}

// All Employee
const allEmployeePage = async (req, res) => {

    try {
        const allEmp = await Employee.find();

        return res.render('allEmployeePage', { allEmp });
    } catch (e) {
        console.log(e);
        console.log(e.message);
        return res.redirect('/employee/error');
    }
}

// Delete Employee
const deleteEmployee = async (req, res) => {

    console.log(req.query);

    try {
        const deletedEmp = await Employee.findByIdAndDelete(req.query.empId);

        if (deletedEmp) {
            console.log("Employee deleted successfully...");
        } else {
            console.log("Employee deletion failed...");
        }

        return res.redirect('/employee/allEmployeePage');
    } catch (e) {
        console.log(e);
        console.log(e.message);
        return res.redirect('/employee/error');
    }
}

// Edit Page Render
const editEmployeePage = async (req, res) => {
    console.log(req.params);

    try {
        const singleEmp = await Employee.findById(req.params.empId);


        return res.render('updateEmployeePage', { singleEmp });
    } catch (e) {
        console.log(e);
        console.log(e.message);
        return res.redirect('/employee/error');
    }

}

// Update Employee
const updateEmployee = async (req, res) => {
    console.log(req.body);

    try {
        const updateEmp = await Employee.findByIdAndUpdate(req.body.emp_id, req.body, { new: true });

        if (updateEmp) {
            console.log("Employee updated successfully...");
        } else {
            console.log("Employee updation failed...");
        }

        return res.redirect('/employee/allEmployeePage');
    } catch (e) {
        console.log(e);
        console.log(e.message);
        return res.redirect('/employee/error');
    }
}

module.exports = {
    employeeFormPage,
    addEmployee,
    allEmployeePage,
    deleteEmployee,
    editEmployeePage,
    updateEmployee,
    errorPage
}