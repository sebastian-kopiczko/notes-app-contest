import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from './note.model';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html'
})
export class CreateNoteComponent {
  @Output() createdItem = new EventEmitter<Note>();
  @Output() date = new EventEmitter<Note>();
  @Output() canceledItem = new EventEmitter<Note>();
  
  newNote = {} as Note;

  priorities = ['low', 'medium', 'high'];
  selectedPriority = null;
  
  onSubmit() {
    this.newNote.createdOn = new Date();
    this.newNote.priority = this.selectedPriority;
    this.createdItem.emit(this.newNote);
    this.newNote = {} as Note;
  }
 
  onCancel() {
    this.canceledItem.emit(this.newNote);    
    this.newNote = {} as Note;
  } 
}
