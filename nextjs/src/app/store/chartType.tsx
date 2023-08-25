export interface course{
    id: number;
    Image: any;
    course:string;
    category: string;
    Course: string;
    timing: string;
}

export interface dynamicCourse{
    id: number;
    Image: any;
    course:string;
    category: string;
    Course: string;
    timing: string;
    isIntern:boolean;
}

export interface courseDetails{
     id:Number,
     Image:any,
     title:String,
     subTitle:String,
     course:String
}
export interface user_course{
    id: number;
    Image: any;
    course:string;
    category: string;
    Course: string;
    timing: string;
}


  

export interface chartType{  
    //courses grid
    course: course[]
    getallCourses:course | null

    //dynamic course
    content_Details:dynamicCourse[]
    selectcontent:dynamicCourse | null


    // dyanmic course
    dynamic_detail: courseDetails[]
    selectactiveCourses:courseDetails | null

    userCourse:user_course[]
    getUserCourse:user_course|null
    selectedFilter: string;

  }