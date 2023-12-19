import * as employeeServices from "../services/employee.service.js"

//Get Employees Method
export const getEmployees = (req, res) => {
    employeeServices.getEmployees()
        .then((result) => {
            res.status(200).json({
                message: "Employees retievred successfully",
                data: result[0],
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Get Employee Method
export const getEmployee = (req, res) => {
    const { id } = req.params;
    employeeServices.getEmployee(id)
    .then((result) => {
        res.status(200).json({
            message: "Employee retrieved successfully",
            data: result[0],
        })
    }).catch((err) => {
        res.status(500).send(err)
    });
};

//Create Employee Method
export const createEmployee = (req, res) => {
    const employee = req.body;
    employeeServices.createEmployee(employee)
        .then(() => {
            res.status(200).json({
                message: "Employee created successfully",
                data: employee,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Update Employee Method
export const updateEmployee = (req, res) => {
    const { id } = req.params;
    const employee = req.body;
    employeeServices.updateEmployee(id, employee)
        .then(() => {
            res.status(200).json({
                message: "Employee updated successfully",
                data: employee,
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};

//Delete Employee Method
export const deleteEmployee = (req, res) => {
    const { id } = req.params;
    employeeServices.deleteEmployee(id)
        .then(() => {
            res.status(200).json({
                message: "Employee deleted successfully",
            })
        }).catch((err) => {
            res.status(500).send(err)
        });
};