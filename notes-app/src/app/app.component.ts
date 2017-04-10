import { Component, OnInit } from '@angular/core';
import { Note } from './notes/note.model';
import { NotesService } from './notes/notes.service';


enum NotesViewState {
  display = 0,
  create = 1
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../css/app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  selectedNote: Note;
  editedNote: Note;
  viewState = NotesViewState.display;
  notesViewStateRef = NotesViewState;

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.notes = this.notesService.get();
    this.selectedNote = this.notes[0];
  }

  onSelectedItem(note: Note) {
    this.selectedNote = note;
    this.viewState = NotesViewState.display;
  }

  onCreatedItem(note: Note) {
    this.notesService.push(note);
    this.viewState = NotesViewState.display;
  }
  onCanceledItem(note: Note) {;
    this.viewState = NotesViewState.display;
  } 

  onDeletedItem(note: Note) {
    this.viewState = NotesViewState.display;
  }

  //trying to create viewState on edit btn click, but not working
  onEditedItem(note: Note) {
    this.editedNote = note;
    this.viewState = NotesViewState.create;
  }

  createNote() {
    this.viewState = NotesViewState.create;
  }

  // urgentNote(notes: Note[]) {
  //   const today = new Date().getTime();
  //   notes.forEach(note => {
  //     let dueDate = note.dueDate.getTime();
  //     console.log(note.title + dueDate + today);
  //    })
  //  }


//I was trying to create export class Filters and separate filtering logic but I find it difficult to use sorting functions properly
//so this part look clumsy but in fact that works  :)
  
  filterTitle(notes: Note[]) {
    var sortTitle = (a, b) => {
      const aTitle = a.title.toUpperCase();
      const bTitle = b.title.toUpperCase();
      let temp = 0;
      aTitle > bTitle ? temp = 1 : temp = -1;
      return temp;
    }
    this.notes.sort(sortTitle);
  }
  
  filterDueDateAsc(notes: Note[]) {
    var sortDueDateAsc = (a, b) => {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime() 
    }
    this.notes.sort(sortDueDateAsc);
  }

  filterPriority(notes: Note[]) {
    var sortPriorityAsc = (a, b) => {
      let temp = 0;
      a.priorityValue > b.priorityValue ? temp = -1 : temp = 1;
      return temp;
    }
    this.notes.sort(sortPriorityAsc);
  }

  // filterDueDateDesc(notes: Note[]) {
  //   var sortDueDateDesc = (a, b) => {
  //     return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
  //   }
  //   this.notes.sort(sortDueDateDesc);
  // }
}
