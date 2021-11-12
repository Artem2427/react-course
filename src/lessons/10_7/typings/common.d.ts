declare interface OneTask {
  task: string;
  isChecked: boolean;
}

declare interface ObjTask {
  date: Date;
  text: OneTask[];
}
