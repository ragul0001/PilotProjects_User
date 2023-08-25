//create table in db connect with sequelize

// module.exports = (sequelizedb, Sequelize) => {

//     //**Create Instructor Table***/
//     console.log("Create Instructor Table in db")
//     const InstructorTable = sequelizedb.define("instructorLogin", {
//         username: {
//             type: Sequelize.STRING,
//             allowNull: false,
//             unique: true
//         },
//         password: {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         email: {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         refresh_token: {
//             type: Sequelize.STRING,
//             allowNull: true,
//         },
//     }, {
//         freezeTableName: true,
//         timestamps: true
//     })
//     InstructorTable.sync().then(() => {
//         console.log("Instructor Table created")
//     }).catch(error => {
//         console.error("Error syncing Instructor Table:", error);
//     })

    //**Create Section Content Table***/
    // console.log("Create Section Content Table in db")
    // const SectionTable = sequelizedb.define("sectionContent", {
    //     section_id: {
    //         type: Sequelize.INTEGER,
    //         autoIncrement: true,
    //         primaryKey: true
    //     },
    //     section_title: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //     },
    //     content_id: {
    //         type: Sequelize.INTEGER,
    //         allowNull: false,
    //     }

    // }, {
    //     freezeTableName: true,
    //     timestamps: false
    // })
    // SectionTable.sync().then(() => {
    //     console.log("Section Table created")
    // }).catch(error => {
    //     console.error("Error syncing Section Content Table:", error);
    // })

    // //***Create Course Content Table****/
    // console.log("Create Course Content Table in db")
    // const CourseContentTable = sequelizedb.define("courseContent", {
    //     section_id: {
    //         type: Sequelize.INTEGER,
    //         allowNull: false,
    //     },
    //     content_id: {
    //         type: Sequelize.INTEGER,
    //         allowNull: false,
    //     },
    //     content_type: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //     },
    //     title: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     upload_location: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //     },
    // }, {
    //     freezeTableName: true,
    //     timestamps: false
    // })
    // CourseContentTable.sync().then(() => {
    //     console.log("Course Content Table created")
    // }).catch(error => {
    //     console.error("Error syncing Course Content Table:", error);
    // })

    // return InstructorTable
    // CourseContentTable, SectionTable
// }