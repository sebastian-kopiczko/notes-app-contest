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
  onCancel: void;
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
  onEditedItem(note: Note) {
    this.selectedNote = note;
    this.viewState = NotesViewState.create;
    console.log('k');
  }

  createNote() {
    this.viewState = NotesViewState.create;
  }

  filterTitle(notes: Note[]) {
    function sortTitle(a, b) {
      const aTitle = a.title.toUpperCase();
      const bTitle = b.title.toUpperCase();
      let temp = 0;
      aTitle > bTitle ? temp = 1 : temp = -1;
      return temp;
    }
    this.notes.sort(sortTitle);
  }
  
  filterDueDateAsc(notes: Note[]) {
    function sortDueDateAsc(a, b) {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime() 
    }
    this.notes.sort(sortDueDateAsc);
  }

  filterDueDateDesc(notes: Note[]) {
    function sortDueDateDesc(a, b) {
      return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
    }
    this.notes.sort(sortDueDateDesc);
  }

  filterPriority(notes: Note[]) {
    function sortPriority(a, b) {
      let temp = 0;
      a.priorityValue > b.priorityValue ? temp = 1 : temp = -1;
      return temp;
    }
    this.notes.sort(sortPriority);
  }
  
}
