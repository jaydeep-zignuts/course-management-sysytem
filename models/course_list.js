
module.exports=( sequelize, DataTypes)=>{
    const course_list=  sequelize.define('course_lists',{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        course_name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        course_duration:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        course_fees:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    });
    return course_list;
}