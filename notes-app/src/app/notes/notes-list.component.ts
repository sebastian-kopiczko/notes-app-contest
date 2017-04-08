import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';

enum CreateNotesView {
  display = 0,
  create = 1
}

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html'
})
export class NotesListComponent {
  @Input() notes = [] as Note[];
  @Output() selectedItem = new EventEmitter<Note>();
  @Output() deletedItem = new EventEmitter<Note>();
  @Output() editedItem = new EventEmitter<Note>();


  viewState = CreateNotesView.display;
  createNotesViewRef = CreateNotesView;
  selectedNote: Note;
  deletedNote: Note;
  editedNote: Note;
  
  
  selectItem(note: Note) {
    this.selectedNote = note;
    this.selectedItem.emit(note);
  }

  deleteItem(note: Note) {
    this.deletedNote = note;
    let deletedNoteIndex = this.notes.indexOf(note);
    this.notes.splice(deletedNoteIndex, 1);
  }

  cancelItem() {
    console.log('ok');
    this.viewState = CreateNotesView.display;
  }

}
