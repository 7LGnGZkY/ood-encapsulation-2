class TaskList {
   constructor() {
      this.tasks = [];
   }

   addTask(task) {
      this.tasks.push(task);
   }

   getOverdueTasks() {
      const today = new Date();
      const overdueTasks = [];
      for (const task of this.tasks) {
         //incomplete
         if (task.status === 'incomplete') {
            //if due date
            if (task.dateDue !== null) {
               //if due date has passed then the task overdue
               if (today > task.dateDue) {
                  overdueTasks.push(task);
               }
            }
         }
      }

      return overdueTasks;
   }
}

module.exports = TaskList;
