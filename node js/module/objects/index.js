const employee=
{
    ename:"Deepti",
    eage:"30",
    eaddress:"ABESEC",
    // 30:"age",
planguage: [
    {
        lang1:"Java", 
        lang2:"C++"
    },
    {
        database1:"Oracle",
       database2:"DBMS"
    },
    {
        framework1:"Hibernate",
        framework2:"Spring"
    }
]

}
// employee.company="TCS";
// console.log(employee);
// employee.planguage[1].database1="Mongodb";
// console.log(employee[30]);
// console.log(employee.planguage[0].lang2);
delete employee.ename;
console.log(employee.ename);
