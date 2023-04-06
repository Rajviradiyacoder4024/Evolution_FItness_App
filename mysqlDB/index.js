import express  from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "simplyloose_cbpatel",
})

app.use(express.json())
app.use(cors())




app.get("/",(req,res)=>{
    res.json("Hello THis is the Backend")
})



app.get("/assessment",(req,res)=>{
    const q = "SELECT * FROM assessment_master"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    
})

//applying
app.get("/bodyassessment",(req,res)=>{
    const q = "SELECT * FROM "
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    
})

//applying
app.get("/class",(req,res)=>{
    const q = "SELECT * FROM "
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    
})


app.get("/crmdeal",(req,res)=>{
    const q = "SELECT * FROM  user_deals"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    
})

app.get("/crminquiries",(req,res)=>{
    const q = "SELECT user_inquiries.id_no, user_inquiries.name,user_inquiries.last_name,user_inquiries.phone,user_inquiries.email,user_inquiries.created_at,user_inquiries.inquiry_type, employee_master.user_name, user_deals.deal_stage FROM user_inquiries INNER JOIN employee_master ON user_inquiries.employee_id = employee_master.id INNER JOIN user_deals ON user_inquiries.deal_id = user_deals.id;  "
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    
})

app.get("/w",(req,res)=>{
    const q = "SELECT * FROM water_intake_schedule"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
    
})

app.post("/w",(req,res)=>{
    const q = "INSERT INTO water_intake_schedule (`time`,`ml`,`description`,`last_modified`) VALUES (?)"
    const values = [
        req.body.time,
        req.body.ml,
        req.body.description,
        req.body.last_modified,
    ]
    
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return(res.json(data));
    })
})

app.delete("/w/:id",(req,res)=>{
    const waterId = req.params.id;
    const q = "DELETE FROM water_intake_schedule WHERE id = ?"

    db.query(q,[waterId],(err,data)=>{
        if(err) return res.json(err);
        return(res.json(data));
    })
})

app.get("/waterintake",(req,res)=>{
    const q = "SELECT * FROM water_intake_schedule"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json(data));
    })
})

app.delete("/waterintake/:id",(req,res)=>{
    const Id = req.params.id;
    const q = "DELETE FROM water_intake_schedule WHERE id = ?"

    db.query(q,[Id],(err,data)=>{
        if(err) return res.json(err);
        return(res.json(data));
    })
})

app.get("/sleep",(req,res)=>{
    const q = "SELECT user_daily_sleep_detail.id,user_daily_sleep_detail.user_id,user_master.user_name,user_daily_sleep_detail.sleep_time,user_daily_sleep_detail.wake_up_time,user_daily_sleep_detail.total_sleep_time From user_daily_sleep_detail INNER JOIN user_master ON user_daily_sleep_detail.user_id =user_master.id ";

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})

app.get("/shifts",(req,res)=>{
    const q = "SELECT * FROM shifts";

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})


app.get("/programlist",(req,res)=>{
    const q = "SELECT programme_master.id,programme_master.programme_name,expert_diet_plan_list.plan_days,exercise_programme_master.name,exercise_programme_master.days FROM programme_master INNER JOIN expert_diet_plan_list ON programme_master.diet_plan_id = expert_diet_plan_list.id INNER JOIN exercise_programme_master ON programme_master.exercise_plan_id = exercise_programme_master.id";

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})

app.get("/programdiet",(req,res)=>{
    const q = "SELECT * FROM expert_diet_plan_list ";

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})

app.get("/programexercise",(req,res)=>{
    const q = "SELECT * FROM exercise_programme_master";

    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})

app.get("/membership",(req,res)=>{
    const q= "SELECT * FROM membership_master"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})

//applying
app.get("/inventory",(req,res)=>{
    const q= "SELECT  inventory.id,inventory.product_name, inventory_brand.brand_name FROM inventory INNER JOIN  inventory_brand ON inventory.brand_id_no =  inventory_brand.id"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})


app.get("/expense",(req,res)=>{
    const q= "SELECT expenses.id,expenses.expense_date,expenses.amount,expenses.created_by,expenses.updated_by,expense_type.type FROM expenses INNER JOIN expense_type ON expenses.type_id = expense_type.id   "
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})

app.get("/event",(req,res)=>{
    const q= "SELECT * FROM event_master"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})

//applying
app.get("/employee",(req,res)=>{
    const q= "SELECT * FROM "
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})


app.get("/dietplansession",(req,res)=>{
    const q= "SELECT * FROM session_master"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})


app.get("/dietplan",(req,res)=>{
    const q= "SELECT user_plan_data.id,user_plan_data.start_date,user_plan_data.end_date,expert_diet_plan_list.plan_name,user_master.user_name FROM user_plan_data INNER JOIN user_master ON user_plan_data.user_id = user_master.id INNER JOIN expert_diet_plan_list on user_plan_data.plan_id = expert_diet_plan_list.id"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return(res.json)(data)
    })
})


app.listen(5000,()=>{
    console.log("Connected to backend")
})
