import { Injectable, PipeTransform, Pipe } from '@angular/core';
import { Note } from './note.model';

@Injectable()
export class NotesService {
    notes = [
      { title: 'First note', content: 'First note sample content', createdOn: new Date(2017, 5, 11, 14, 25), priority: 'high', priorityValue: 3, dueDate: new Date(2017, 4, 11)},
      { title: 'Second note', content: 'Second note sample content', createdOn: new Date(2017, 4, 2, 16, 30), priority: 'low', priorityValue: 1, dueDate: new Date(2017, 5, 4)},
      { title: 'Third note', content: 'Third note sample content', createdOn: new Date(2017, 4, 3, 17, 30), priority: 'medium', priorityValue: 2, dueDate: new Date(2017, 4, 25)},
      { title: 'Fourth note', content: 'Fourth note sample content', createdOn: new Date(2017, 4, 4, 18, 30), priority: 'high', priorityValue: 3, dueDate: new Date(2017, 4, 13)}
    ] as Note[];

    get(): Note[] {
        return this.notes;
    }

    push(note: Note) {
        this.notes.push(note);
    }
}

