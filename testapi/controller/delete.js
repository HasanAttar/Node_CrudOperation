
const con = require('../config/connection');

exports.delete = (req, res) => {
    // Extract the customer ID from the request parameters
    const customerId = req.params.id;

    // Construct the SQL query to delete the customer with the given ID
    const sql = `DELETE FROM customers WHERE id = ?`;

    // Execute the SQL query
    con.query(sql, [customerId], function(err, result) {
        if (err) {
            console.log("Error deleting customer:", err);
            return res.status(400).json({
                success: false,
                error: "Failed to delete customer"
            });
        } else {
            // Check if any rows were affected (i.e., if the customer with the given ID existed)
            if (result.affectedRows > 0) {
                console.log("Customer deleted successfully");
                return res.status(200).json({
                    success: true,
                    message: "Customer deleted successfully"
                });
            } else {
                console.log("Customer with ID " + customerId + " not found");
                return res.status(404).json({
                    success: false,
                    error: "Customer not found"
                });
            }
        }
    });
};
