import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';



@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html'
})
export class NotesListComponent {
  @Input() notes = [] as Note[];
  @Output() selectedItem = new EventEmitter<Note>();
  @Output() deletedItem = new EventEmitter<Note>();
  @Output() editedItem = new EventEmitter<Note>();

  selectedNote: Note;
  deletedNote: Note;
  editedNote: Note;
  urgentNote: Note;

  selectItem(note: Note) {
    this.selectedNote = note;
    this.selectedItem.emit(note);
  }

  deleteItem(note: Note) {
    this.deletedNote = note;
    let deletedNoteIndex = this.notes.indexOf(note);
    this.notes.splice(deletedNoteIndex, 1);
  }

  editItem(note: Note) {
    this.selectedNote = note;
    console.log('editing item ' + note.title);
  }

}
