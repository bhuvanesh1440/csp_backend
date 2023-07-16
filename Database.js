const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
    user: "system",
    password: "manager",
    connectString: "localhost:/orcl.mshome.net"
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      if(Parameters[0]=="schemes_table"){
      Sql = `insert into ${Parameters[0]} values('${Details.s_name}','${Details.s_info}','${Details.q1}','${Details.ans1 }','${Details.q2}','${Details.ans2}','${Details.q3}','${Details.ans3}','${Details.q4}','${Details.ans4}')`;
      }

      // if(Parameters[0]=="Users"){
      //   sql=`insert into ${Parameters[0]} values('${Details.u_name}','${Details.u_mail}','${Details.pass}');`
      // }
      if(Parameters[0]=="users"){
        Sql = `insert into ${Parameters[0]} values('${Details.u_name}','${Details.u_mail}','${Details.pass}')`;
      }
      break;
    
    
    case "Update":
      if(Parameters[0]=="Students"){
      Sql = `update ${Parameters[0]} set RollNumber = '${Parameters[3].RollNumber}', Name = '${Parameters[3].Name}' where RollNumber = '${Details}'`;
    }
    if(Parameters[0]=="schemes_table"){
      Sql = `update ${Parameters[0]} set s_name = '${Parameters[3].s_name }', s_info  = '${Parameters[3].s_info }',q1  = '${Parameters[3].q1 }',ans1='${Parameters[3].ans1 }',q2  = '${Parameters[3].q2 }',ans2='${Parameters[3].ans2 }' ,q3  = '${Parameters[3].q3 }',ans3='${Parameters[3].ans3 }' ,q4  = '${Parameters[3].q4 }',ans4='${Parameters[3].ans4 }'  where s_name = '${Details}'`;

   

    }
      break;
      
    case "Delete":
      if(Parameters[0]=="Students"){
      Sql = `delete from ${Parameters[0]} where RollNumber = '${Details}'`;
      }
      if(Parameters[0]=="schemes_table"){
        Sql = `delete from ${Parameters[0]} where s_name = '${Details}'`;
      }
      break;
    case "Read":
      if(Parameters[0]=="Students"){
        // Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select pass from ${Parameters[0]} where Rollnumber = '${Details}'`;
        }

      }

      if(Parameters[0]=="schemes_table"){
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where s_name = '${Details}'`;
        }
      }
      if(Parameters[0]=="users"){
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          // console.log(Details);
          Sql = `select pass from ${Parameters[0]} where u_name = '${Details}'`;
        }

      }

      

      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  console.log(Details);
  var result = await Query(Sql);
  return result;
};
const group = async (...Parameters) => {}


module.exports = Result;