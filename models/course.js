class Course {
    constructor(id, name, teacher, sessions, history, average){
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.sessions = sessions;
        this.history = history;
    }
}

const courses_data = [
    new Course(0, 'IHC', 'Carmen Ceron', [3, 4], [1, 2], 7.8),
    new Course(1, 'IHC', 'Carmen Ceron', [3, 4], [1, 2], 7.8),
    new Course(2, 'IHC', 'Carmen Ceron', [3, 4], [1, 2], 7.8),
    new Course(3, 'IHC', 'Carmen Ceron', [3, 4], [1, 2], 7.8),
]

export { courses_data };
export default Course;