const controller = {};

controller.list = (req, res) => {
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM operations',(err,operations) => {
            if(err){
                res.json(err);
            }
            res.render('operation',{
                data:operations
            });

        });
    });
};
controller.save = (req,res) => {
    const data = req.body;
req.getConnection((err,conn) => {
    conn.query('INSERT INTO operations set ?',[data],(err,operation) => {
       res.redirect('/');

    });

})
};

controller.edit = (req,res) => {
    const { id }= req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM operations WHERE id = ?',[id],(err,operation)=>{
            res.render('operation_edit',{
                data:operation[0]
            });

        });

    });
};
controller.update = (req,res)=>{
    const { id }= req.params;
    const newOperation= req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE operations set ? WHERE id = ?',[newOperation,id], (err,rows)=>{
            res.redirect('/');

        });

    });
};

controller.delete = (req,res) => {
    const { id }= req.params;
req.getConnection((err,conn) =>{
    conn.query('DELETE FROM operations WHERE id = ?', [id],(err,rows)=>{
        res.redirect('/');

    });
})
};


module.exports = controller;